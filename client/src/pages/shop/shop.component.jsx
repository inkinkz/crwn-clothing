import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
