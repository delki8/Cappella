import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PastoralIcon} from '../../../../assets/images/PastoralIcon';
import {GenericItem} from '../../../../components/GenericItem.js';

export const PastoralItem = () => {
  const navigation = useNavigation();
  const titulo = 'Uma Palavra Pastoral';

  return (
    <GenericItem
      titulo={titulo}
      icon={<PastoralIcon />}
      width={284}
      height={347}
      onNavigate={() =>
        navigation.push('Pastoral', {
          titulo,
        })
      }
    />
  );
};
