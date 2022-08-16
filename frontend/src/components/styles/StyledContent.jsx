import styled from 'styled-components'

export const StyledContent = styled.div`
    height: 100%;
    background: #189ab4;
    width: 650px;
    min-height: 700px;
    border-radius: 30px;
    display: flex;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 74%;

        .btn {
            width: 185px;
            height: 40px;
            border: none;
            border-radius: 10px;
            background-color: #05445e;
            font-size: 20px;
        }

        .btn-large {
            width: 100%;
            font-size: 30px;
            font-weight: bold;
        }

        .header {
            display: flex;
            font-size: 60px;
            justify-content: space-between;
            width: 100%;
        }

        h1 {
            font-size: 50px;
            white-space: nowrap;
        }

        h3 {
            font-weight: normal;
            font-size: 20px;
        }

        div {
            margin: 12px;
        }

        input[type='text'] {
            width: 275px;
            border-radius: 10px;
            height: 30px;
            border: none;
            background-color: #05445e;
        }

        .input-text {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .input-placeholder {
            padding: 0px;
            margin: 0px;
            &:before {
                content: 'Placeholder';
                padding-top: 2px;
                margin-left: 5px;
                font-size: 20px;
                color: rgba(212, 241, 244, 0.3);
                position: absolute;
            }
        }

        .img-upload {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;

            div {
                font-size: 150px;
                border: 5px solid #05445e;
                border-radius: 10px;
                height: 200px;
                width: 200px;
                display: flex;
                flex-direction: column-reverse;
                background: #d4f1f4;
                align-items: center;
            }
        }
    }
`
