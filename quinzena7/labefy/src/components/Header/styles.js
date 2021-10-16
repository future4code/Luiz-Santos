import styled from 'styled-components';

export const ContainerHeader = styled.header`
  height: 80px;

  display: flex;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #494d4b;

  /* img {
    width: 100%;
    max-width: 100px;
  } */

  p {
    /* margin-left: 2rem; */
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #494d4b;
  }
`;

// export const ContentHeader = styled.header`
//   /* max-width: 1200px;
//   height: 100%;
//   margin: 0 auto; */
//   height: 65px;
//   padding: 20px 40px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #422e4e;
  }
`;

export const Search = styled.div`
  min-width: 350px;

  input {
    font-size: 16px;
    color: #fff;
    width: 100%;
    background: none;
    padding: 5px 8px;
    border: none;
    border: 1px solid #aaa;
    border-radius: 15px;

    transition: all 0.2s ease;

    &:hover,
    &:focus {
      border-width: 2px;
    }
  }
`;

export const Notification = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #422e4e;
  }
`;
