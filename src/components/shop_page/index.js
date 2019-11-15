import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { firestore, convertCollectionSnapshotToMap } from 'utils/firebase'
import { updateCollections } from '../shop_page/actions'

import Spinner from 'custom/spinner'

import CollectionOverview from 'components/collection/collection_overview'

function ShopPage(params) {
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCollection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const fetchCollection = () => {
    setLoading(true)
    try {
      const collectionRef = firestore.collection('collections')

      collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        setLoading(false)
        dispatch(updateCollections(collectionsMap))
      })
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }

  return <Fragment>{isLoading ? <Spinner /> : <CollectionOverview />}</Fragment>
}

export default ShopPage
