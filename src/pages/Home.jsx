import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetchProducts from "../hooks/useFetchProducts";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 80px 0px;
`;

function Home() {
  const apiUrl = "https://fakestoreapi.com/products";
  const { result: productsList, loading } = useFetchProducts(apiUrl);

  return (
    <StyledDiv>
      {productsList?.map((product) => (
        <Card key={product.id} products={product} isLoading={loading} />
      ))}
    </StyledDiv>
  );
}

export default Home;