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
    paths: [
      {
        params: { episodeId: "1" },
      },
      {
        params: { episodeId: "2" },
      },
      {
        params: { episodeId: "3" },
      },
    ],
    // paths,
    fallback: "blocking",
  };
}

// 100 * 0.1 => 10 sec
// 100,000 % 0.1 => 10,000 sec! BT : NOK! => fallback true!

export async function getStaticProps(context) {
  const { params } = context;

  console.log(`generating page for episodeId : ${params.episodeId}`);

  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  return {
    props: {
      episode: data,
    },
  };
}
