export const dataMetrica = {
  newT: [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [10, 38],
          backgroundColor: ["#BA192C", "#E5E5E5"],
          borderColor: ["#BA192C", "#E5E5E5"],
          borderWidth: 1,
          numbers: 28,
        },
      ],
    },
  ],
  timeT: [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [68, 32],
          backgroundColor: ["#BA192C", "#E5E5E5"],
          borderColor: ["#BA192C", "#E5E5E5"],
          borderWidth: 1,
          numbers: 32,
        },
      ],
    },
  ],
  petitionT: [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [50, 50],
          backgroundColor: ["#BA192C", "#E5E5E5"],
          borderColor: ["#BA192C", "#E5E5E5"],
          borderWidth: 1,
          numbers: 15,
        },
      ],
    },
  ],
  validationT: [
    {
      datasets: [
        {
          label: "# of Votes",
          data: [20, 80],
          backgroundColor: ["#BA192C", "#E5E5E5"],
          borderColor: ["#BA192C", "#E5E5E5"],
          borderWidth: 1,
          numbers: 51,
        },
      ],
    },
  ],
  typeT: [
    {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
      datasets: [
        {
          label: "Externo",
          data: [80, 20, 70, 50, 80, 20, 50],
          borderColor: "rgba(5, 37, 50, 1)",
          backgroundColor: "rgba(5, 37, 50, 1)",
          tension: 0.5,
        },
        {
          label: "Casa",
          data: [20, 80, 50, 70, 20, 80, 40],
          borderColor: "rgba(186, 25, 44, 1)",
          backgroundColor: "rgba(186, 25, 44, 1)",
          tension: 0.5,
        },
      ],
    },
  ],
  timeValidationT: [
    {
      labels: ["Casa", "Exterior"],
      label: [
        {
          referencia: "Entre 1h y 2h",
          data: 20,
          backgroundColor: "rgba(186, 25, 44, 1)",
        },
        {
          referencia: "Entre 2h y 3h",
          data: 80,
          backgroundColor: "rgba(5, 37, 50, 1)",
        },
        {
          referencia: "Entre 3h y 4h",
          data: 15,
          backgroundColor: "#FFA800",
        },
        {
          referencia: "Entre 5h y 6h",
          data: 25,
          backgroundColor: "#78A240",
        },
        {
          referencia: "Entre 7h y 8h",
          data: 15,
          backgroundColor: "rgba(170, 160, 160, 1) ",
        },
      ],
      datasets: [
        {
          label: "Tiempo medio de validacion",
          data: [20, 80, 15, 25, 15],
          backgroundColor: [
            "rgba(186, 25, 44, 1)",
            "rgba(5, 37, 50, 1)",
            "#FFA800",
            "#78A240",
            "rgba(170, 160, 160, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  ],
  ingresoOtrosT: [
    {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      datasets: [
        {
          label: "Ingresos en miles",
          data: [
            200, 450, 20, 500, 500, 225, 35, 588, 500, 321, 400, 150, 580, 100,
            100, 375, 565, 12, 100, 279, 200, 450, 100, 100, 375, 565, 12, 100,
            279, 200, 450,
          ],
          backgroundColor: "rgba(186, 25, 44, 1)",
          hoverBackgroundColor: "rgba(0, 60, 85, 1)",
          pointBackgroundColor: "rgba(0, 60, 85, 1)",
        },
      ],
    },
  ],
  ingresoG: {
    data: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      datasets: [
        {
          label: "Casa",
          data: [
            200, 450, 20, 500, 500, 225, 35, 588, 500, 321, 400, 150, 580, 100,
            100, 375, 565, 12, 100, 279, 200, 450, 100, 100, 375, 565, 12, 100,
            279, 200, 450,
          ],
          backgroundColor: "rgba(186, 25, 44, 1)",
        },
        {
          label: "Externos",
          data: [
            400, 150, 580, 100, 100, 375, 565, 12, 100, 279, 200, 450, 20, 500,
            500, 225, 35, 588, 500, 321, 400, 150, 500, 500, 225, 35, 588, 500,
            321, 400, 150,
          ],
          backgroundColor: "rgba(0, 60, 85, 1)",
        },
      ],
    },
    dia: {
      active: "nav-link active",
    },
    semana: {
      active: "nav-link",
    },
    mensual: {
      active: "nav-link",
    },
    anaul: {
      active: "nav-link",
    },
  },
};
