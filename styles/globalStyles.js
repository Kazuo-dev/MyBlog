import { createGlobalStyle  } from "styled-components";




const GlobalStyle = createGlobalStyle`
  body {
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }

  button {
    background-color: red;
  }

  .blog {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    max-width: 100vw;

    h3 {
      color: white;
      font-size: 3rem;
    }

    &-nav {
      width: 100%;
      height: 10%;
      position: fixed;
      display: flex;
      justify-content: flex-end;
      
      ul {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        li {
          display: inline-block;
          margin: 0 10px 0 10px;
          font-size: 1.5rem;
        }
      }
    }

    &-posts {
      margin-top: 5%;
      height: fit-content;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__post {
        height: 70vh;
        width: 100%;
      }
    }
  }

  footer {
    background-color: green;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`
export default GlobalStyle;