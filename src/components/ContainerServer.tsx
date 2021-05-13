import React from 'react';
const {useTracker} = require('@socialize/react-native-meteor');

type ReactElement = JSX.Element | JSX.Element[];

interface Props {
  children: (COLLECTIONTYPE: any) => ReactElement;
  collection: any;
}

export const ContainerServer = ({children, collection}: Props) => {
  const COLLECTION = useTracker(() => collection.find({idIgreja: 2}).fetch());

  return <>{children(COLLECTION)}</>;
};
