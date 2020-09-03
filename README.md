## PMA Front End Test

Setting up the project

1. Start by setting up the webserver. Navigate to pmaserver and install the node dependencies. Then run the server with the start script. This server serves up a single endpoint '/marketData' which sends back 500 rows of dummy data. Note: Outside of the id which is static, the numbers returned are randomly generated and will have wide changes each time they are requested.
2. With the server running on port 1005, navigate to pmaui and install it's node dependencies. This is just a boilerplate create react app project. Run the start script to start the project. This project is set up to proxy all requests to the webserver from the first step.

Your task

1. Set up a fetch request that retrieves data from the '/marketData' endpoint once every second.
2. Create a grid/list/table to view the data. Do not use any external libraries for this.
3. Track the previous value of the "current" property to identify changes from the current value of the "current" property. Rely on the id property for comparisons, which is guaranteed to be unique
4. Apply a color change to each of the cells accordingly
  * 100% - 75% positive change - Green
  * 50% - 74% positive change - Light Green
  * 0% - 49% positive change - No Highlight
  * 0% - 49% negative change - No Highlight
  * 50% - 74% negative change - Light Red
  * 100% - 75% negative change - Red

  Constraints

  1. No need for filtering/sorting/virtualization or any other advanced grid fetaures, a simple list of values is all we are looking for.
  2. Dont feel the need to spend an excesssive amount of time on styling for this task. The primary assesment is js based.