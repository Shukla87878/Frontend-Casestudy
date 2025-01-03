
const data = [
  {
    "name": "PlayStation 5",
    "data": [
      {"label": "Graphics_Quality", "value": 4.7},
      {"label": "Game_Library", "value": 4.2},
      {"label": "User_Interface", "value": 3.9},
      {"label": "Controller_Design", "value": 4.5},
      {"label": "Online_Services", "value": 4.1},
      {"label": "Load_Times", "value": 4.8},
      {"label": "Price_Value", "value": 3.8},
      {"label": "Exclusive_Titles", "value": 4.6},
      {"label": "Hardware_Design", "value": 3.7}
    ]
  },
  {
    "name": "Xbox Series X",
    "data": [
      {"label": "Graphics_Quality", "value": 4.6},
      {"label": "Game_Library", "value": 4},
      {"label": "User_Interface", "value": 4.2},
      {"label": "Controller_Design", "value": 4.3},
      {"label": "Online_Services", "value": 4.7},
      {"label": "Load_Times", "value": 4.9},
      {"label": "Price_Value", "value": 4.1},
      {"label": "Exclusive_Titles", "value": 3.8},
      {"label": "Hardware_Design", "value": 4.2}
    ]
  },
  {
    "name": "Nintendo Switch",
    "data": [
      {"label": "Graphics_Quality", "value": 3.5},
      {"label": "Game_Library", "value": 4.5},
      {"label": "User_Interface", "value": 4},
      {"label": "Controller_Design", "value": 4.1},
      {"label": "Online_Services", "value": 3.2},
      {"label": "Load_Times", "value": 3.6},
      {"label": "Price_Value", "value": 4.3},
      {"label": "Exclusive_Titles", "value": 4.8},
      {"label": "Hardware_Design", "value": 4.4}
    ]
  },
  {
    "name": "Steam Deck",
    "data": [
      {"label": "Graphics_Quality", "value": 3.8},
      {"label": "Game_Library", "value": 4.7},
      {"label": "User_Interface", "value": 3.7},
      {"label": "Controller_Design", "value": 4},
      {"label": "Online_Services", "value": 4.3},
      {"label": "Load_Times", "value": 3.9},
      {"label": "Price_Value", "value": 4.2},
      {"label": "Exclusive_Titles", "value": 3},
      {"label": "Hardware_Design", "value": 3.8}
    ]
  },
  {
    "name": "ROG Ally",
    "data": [
      {"label": "Graphics_Quality", "value": 4},
      {"label": "Game_Library", "value": 4.4},
      {"label": "User_Interface", "value": 3.5},
      {"label": "Controller_Design", "value": 3.8},
      {"label": "Online_Services", "value": 3.7},
      {"label": "Load_Times", "value": 4.2},
      {"label": "Price_Value", "value": 3.5},
      {"label": "Exclusive_Titles", "value": 2.8},
      {"label": "Hardware_Design", "value": 4.1}
    ]
  },
  {
    "name": "Retroid Pocket",
    "data": [
      {"label": "Graphics_Quality", "value": 3.2},
      {"label": "Game_Library", "value": 3.8},
      {"label": "User_Interface", "value": 3.3},
      {"label": "Controller_Design", "value": 3.5},
      {"label": "Online_Services", "value": 2.8},
      {"label": "Load_Times", "value": 3.4},
      {"label": "Price_Value", "value": 4.5},
      {"label": "Exclusive_Titles", "value": 2.5},
      {"label": "Hardware_Design", "value": 3.9}
    ]
  },
  {
    "name": "Analogue Pocket",
    "data": [
      {"label": "Graphics_Quality", "value": 4.1},
      {"label": "Game_Library", "value": 3.5},
      {"label": "User_Interface", "value": 3.8},
      {"label": "Controller_Design", "value": 4.2},
      {"label": "Online_Services", "value": 2.5},
      {"label": "Load_Times", "value": 4.3},
      {"label": "Price_Value", "value": 3.6},
      {"label": "Exclusive_Titles", "value": 2.7},
      {"label": "Hardware_Design", "value": 4.5}
    ]
  }
];

const consoles = data.map(console => console.name);
const features = data[0].data.map(feature => feature.label);
const values = data.map(console => console.data.map(feature => feature.value));

const trace = {
  z: values,
  x: features,
  y: consoles,
  type: 'heatmap',
  colorscale: 'YlOrRd',  
  colorbar: {
    title: 'Rating'
  }
};

const layout = {
  title: 'Gaming Console Features Comparison Heatmap',
  xaxis: {
    title: 'Feature Categories'
  },
  yaxis: {
    title: 'Gaming Consoles'
  }
};

Plotly.newPlot('heatmap', [trace], layout);
