import styled from "styled-components";
import Button from "./Button";
/* Elemento de item da lista personalizado com CSS */
const Sli = styled.li`
margin-bottom: 10px;
padding: 16px;
border-radius: 8px;
background: #f2f2f2;
display: flex;
justify-content: space-between;
align-items: center;
`;

/* Elemento de bloco informativo personalizado com CSS*/
const SDivInfo = styled.div`
p {
    font - size: 16px;
    margin - bottom: 2px;
}

span {

font - size: 16px;
font - weight: bold;
}
`;

/* Elemento de bloco de unidades personalizado com CSS*/
const SDivUnits = styled.div`
    width: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        padding: 5px 10px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

/**
 * @param {Object} product
 */
function CartProduct({ product, onChange, isLoading}){
    return(
        <SLi>
            <SDivInfo>
                <p>{product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
            <SDivUnits>
                <button disabled={isLoading} onClick={() => onChange(product, -1)}>
                    -
                </button>
            </SDivUnits>
        </SLi>
    )
}