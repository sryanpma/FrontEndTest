## PMA Front End Test

Setting up the project

1. Start by setting up your the webserver. Navigate to pmaserver and install the node dependencies. Then run the server with the start script. This server serves up a single endpoint '/marketData' which sends back 500 rows of dummy data that have randomly generated values. Note: The numbers returned are randomly generated and will have wide changes each time they are requested.
2. With the server running on port 1005, navigate to pmatest and install it's node dependencies. This is just a boilerplate create react app project. Run the start script to start the project. This project is set up to proxy all requests to the webserver from the first step.

Your task

1. Set up a polling service to retrieve the market data once every second.
2. Create a grid/list/table to view the data. Do not use any external libraries for this.
3. Track the previous value to identify changes from the current value for the fields current and peRatio
4. Animate a color change of the cells accordingly
  * 100% - 75% positive change - Green
  * 50% - 74% positive change - Light Green
  * 0% - 49% positive change - No Highlight
  * 0% - 49% negative change - No Highlight
  * 50% - 74% negative change - Light Red
  * 100% - 75% negative change - Red

