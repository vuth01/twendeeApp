import styled from 'styled-components';

export const ListUserStyled = styled.div`
    padding: 2rem 10rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const UserStyled = styled.div`
    width: 200px;
    height: 300px;
    border: 1px solid #000;
    margin: 10px;
    .user-img img{
        width: 100%;
        border-bottom: 1px solid #000;
    }
    .user-detail{
        font-size: 14px;
        padding: 10px;
        font-weight: bold;
        span{
            font-weight: 400;
        }
    }
    &:hover{
        cursor: pointer;
        transition: all 0.3s ease;
        transform: translateY(-2px);
    }
`
export const Search = styled.div`
    text-align: center;
    input{
    height: 30px;
    min-width: 300px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #000;
    }
`