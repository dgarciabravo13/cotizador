import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { primeraMayuscula } from "../helper";

const ResumenContenedor = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (!marca || !year || !plan) return null;

  return (
    <ResumenContenedor>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca:{ primeraMayuscula(marca) }</li>
        <li>Plan:{ primeraMayuscula(plan) }</li>
        <li>Año del vehiculo:{year}</li>
      </ul>
    </ResumenContenedor>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;
