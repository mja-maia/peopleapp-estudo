import { createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/peoplePage'
import PeopleDetailPage from './src/pages/peopleDetailPage'
import { capitalizeFirstLetter } from './src/util'

export default createStackNavigator(
	{
		Main: {
			screen: PeoplePage
		},
		PeopleDetail: {
			screen: PeopleDetailPage,
			navigationOptions: (navigate) => {
                const peopleName = navigate.navigation.state.params.people.name.first;
                return ({
                    title: capitalizeFirstLetter(peopleName),
                    headerTitleStyle: {
                        color: "#fff",
                        fontSize: 30
                    }
                })
            }
		}
	},
	{
		navigationOptions: {
			title: "Pessoas",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "#6ca2f7",
				borderBottomWidth: 1,
				borderBottomColor: "#C5C5C5FF"
			},
			headerTitleStyle: {
				color: "#fff",
				fontSize: 30,
				alignSelf: "center"
			}
		}
	}
);


// export default PeoplePage