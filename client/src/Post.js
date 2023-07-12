export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/04/twitter-ads-account.jpg?w=1390&crop=1"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>
          Twitter limits the number of tweets users can read amid extended
          outage
        </h2>
        <p className="info">
          <a className="author">Ishan Garg</a>
          <time>2023-06-03 16:45</time>
        </p>
        <p className="summary">
          Twitter is putting limits to how many tweets its users can read as the
          Elon Musk-owned service suffers extended outage that has stymied
          users’ ability to track new posts.
        </p>
      </div>
    </div>
  );
}
