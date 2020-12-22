import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter, useStorybookApi } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'seealso';
const PANEL_ID = `${ADDON_ID}/panel`;

const SeeAlsoPanel = () => {
    const results = useParameter('seeAlso', []);

    return <>
        { results.length ? (
                <ol>
                    {
                        results.map(component => {
                            return <li>
                                <button onClick={() => {
                                    location.href = location.origin + "?path="+component.name;
                                }}>
                                    {component.label}
                                </button>
                            </li>
                        })
                    }
                </ol>
            ) : null
        }
    </>;
}

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'See also',
        render: ({active, key}) => {
            return <AddonPanel active={active} key={key}>
                <SeeAlsoPanel />
            </AddonPanel>
        }
    })
})