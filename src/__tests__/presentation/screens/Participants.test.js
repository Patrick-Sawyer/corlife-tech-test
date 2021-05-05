import React from 'react';
import {render, act} from '@testing-library/react-native';
import Participants from '../../../presentation/screens/Participants';
import {MockedProvider} from '@apollo/client/testing';
import {GET_PARTICIPANTS} from '../../../data/queries';

describe('Participants screen', () => {
  it('can list each participant', async () => {
    /*TODO TASK 07*/
    const results = [
      {name: 'Rick Sanchez', gender: 'male'},
      {name: 'Morty Smith', gender: 'male'},
    ];

    const {queryByText} = render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_PARTICIPANTS,
            },
            result: {
              data: {
                characters: {
                  results: results,
                },
              },
            },
          },
        ]}
        addTypename={false}>
        <Participants />
      </MockedProvider>,
    );

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // expect...

    expect(queryByText('Rick Sanchez')).toBeTruthy();
    expect(queryByText('Morty Smith')).toBeTruthy();
  });
});
