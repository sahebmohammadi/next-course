import axios from "axios";

const Episode = ({ episode }) => {
  return (
    <div>
      <h1>episode : {episode.episode}</h1>
      <h2>
        name : {episode.name} - date : {episode.air_date}
      </h2>
    </div>
  );
};

export default Episode;

export async function getStaticPaths() {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);

  const paths = data.results.map((episode) => {
    return {
      params: { episodeId: `${episode.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// list => creare our pgae list !! => posts/1,
//? courses : courses/react ,...

export async function getStaticProps(context) {
  const { params } = context;

  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  return {
    props: {
      episode: data,
    },
  };
}
