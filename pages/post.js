const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>Meh</p>
  </div>
);

export default (props) => (
  <div>
    <Content url={props.url}/>
  </div>
);
