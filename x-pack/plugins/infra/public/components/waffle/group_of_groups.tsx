/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import styled from 'styled-components';
import { InfraWaffleMapGroupOfGroups, InfraWaffleOptions } from '../../lib/lib';
import { GroupName } from './group_name';
import { GroupOfNodes } from './group_of_nodes';

interface Props {
  onDrilldown: () => void;
  options: InfraWaffleOptions;
  group: InfraWaffleMapGroupOfGroups;
  formatter: (val: number) => string;
}

export const GroupOfGroups: React.SFC<Props> = props => {
  return (
    <GroupOfGroupsContainer>
      <GroupName group={props.group} onDrilldown={props.onDrilldown} />
      <Groups>
        {props.group.groups.map(group => (
          <GroupOfNodes
            isChild={true}
            key={group.id}
            onDrilldown={props.onDrilldown}
            options={props.options}
            group={group}
            formatter={props.formatter}
          />
        ))}
      </Groups>
    </GroupOfGroupsContainer>
  );
};

const GroupOfGroupsContainer = styled.div`
  margin: 0 10px;
`;

const Groups = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 10px 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.eui.euiBorderColor};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
`;