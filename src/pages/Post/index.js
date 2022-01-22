import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

/**
 * useMemo() será utilizado para não precisar criar uma instância do URLSearchParams a cada nova renderização.
 * Ele só irá criar uma nova instância do URLSearchParams caso o valor do search que está dentro do location mudar.
 * Se o componente sofrer qualquer alteração (renderização) e não houver nenhuma alteração dentro do search, ele
 * não irá criar novamente a instância do URLSearchParams.
 */

// export default function Post() {
//   const urlParams = useParams();
//   const { search } = useLocation(); // para pegar os Query Params
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(urlParams);
//   console.log(queryParams.get('meuQueryParam'));

//   return (
//     <h1>Post Page</h1>
//   )
// }


export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    const { history } = this.props;
    history.push('/posts');
  }

  render() {
    return (
      <>
        <h1>Post page</h1>
        <button
          onClick={this.handleNavigate}
        >
          Voltar para a lista de posts
        </button>
      </>
    )
  }
}
