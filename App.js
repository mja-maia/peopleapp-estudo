import { createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/peoplePage'

export default createStackNavigator(
	{
		Main: {
			screen: PeoplePage
		}
	},
	{
		navigationOptions: {
			title: "Pessoas",
			headerStyle: {
                backgroundColor: "#6ca2f7",
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5FF'          
            },
			headerTitleStyle: {
                color: '#fff',
                fontSize: 30,
                alignSelf: 'center'
			}
		}
	}
);


// export default PeoplePage