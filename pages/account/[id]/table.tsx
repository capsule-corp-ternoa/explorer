import { FormattedNumber } from 'react-intl';
import Check from 'components/assets/Check';

export const fields = [
  { text: 'Total Balance', dataKey: 'total_balance' },
  { text: 'Free Balance', dataKey: 'free_balance' },
  { text: 'Nonce', dataKey: 'nonce' },
  { text: 'Active', dataKey: 'active' },
  { text: 'Past Roles', dataKey: 'past_roles' },
]

export const render = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'total_balance':
    case 'free_balance':
      return (
        <>
          <FormattedNumber value={data[dataKey]} format='decimal' />
          &nbsp;Caps
        </>
      )

    case 'nonce':
      return data[dataKey]

    case 'active':
      return data[dataKey] ? <Check className="webCheckIcon" /> : null

    case 'past_roles':
      return data[dataKey]
  }
}

export default {
  fields,
  render
}
