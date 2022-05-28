import axios from "axios";
import Link from "next/link";

const EpisodeList = ({ episodeList }) => {
  return (
    <div>
      <h1>episodeList page</h1>
      {episodeList.map((episode) => {
        return (
          <div key={episode.id}>
            <Link href={`/episodes/${episode.id}`}>
              <a>
                <h2>
                  episode: {episode.episode} - name : {episode.name}
                </h2>
              </a>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      episodeList: data.results.slice(0, 3),
    },
  };
}
