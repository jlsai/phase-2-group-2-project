import React, { useState, useEffect } from "react"
import Search from './Search'
import LandmarkList from './LandmarkList'
import NewLandmarkForm from './NewLandmarkForm'

function LandmarkPage({ modifiedLocations, searchChange, handleFavorite, search, deleteFavoriteLocation, handleRemove }) {

	return (
		<div>
			<Search search={search} searchChange={searchChange} />
			<LandmarkList
				locations={modifiedLocations}
				handleFavorite={handleFavorite}
				deleteFavoriteLocation={deleteFavoriteLocation}
				handleRemove={handleRemove}

			/>
		</div>
	)
}

export default LandmarkPage;
