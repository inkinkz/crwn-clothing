import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // MOVED INTO shop.actions.js
  // const { updateCollections } = this.props;
  // const collectionRef = firestore.collection("collections");
  //
  // // Promise -> needs remount to get new data
  // collectionRef.get().then((snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({ loading: false });
  // });
  //
  //
  // Observable -> live update (onSnapshot)
  // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
  //   (snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({ loading: false });
  //   }
  // );

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        component={CollectionsOverviewContainer}
        // render={(props) => (
        //   <CollectionsOverviewWithSpinner
        //     isLoading={isCollectionsFetching}
        //     {...props}
        //   />
        // )}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
