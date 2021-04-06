function mapStateToProps(component) {
	switch (component) {
		case "HomePage": {
			return function (state) {
				return {
					ownerAddress: state.ownerAddress,
                    userAddress: state.userAddress,
                    isAdmin: state.isAdmin,
                    eventList: state.eventList
				};
			}
		}
		case "ApiPage": {
			return function (state) {
				return {
					ownerAddress: state.ownerAddress,
                    userAddress: state.userAddress,
                    isAdmin: state.isAdmin,
                    eventList: state.eventList
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;