import React from 'react';
import { FieldContainer } from '../../../containers';
import { valueTypes } from '../../../types';
import { resolver } from '../actions';
import { getDomainResolver, setDomainResolver } from '../operations';
import { ResolverDatalist } from '../../../components';

const registryFieldProps = {
  fieldName: 'resolver',
  type: 'text',
  valueType: valueTypes.RESOLVER,
  getField: state => state.admin.resolver,
  get: getDomainResolver,
  changeEdit: resolver.changeEdit,
  set: setDomainResolver,
  options: {
    name: 'resolvers',
    datalist: <ResolverDatalist />
  }
};

export default () => <FieldContainer {...registryFieldProps} />;
