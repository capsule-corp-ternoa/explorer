import { FormattedNumber } from 'react-intl';
import Check from 'components/assets/Check';

export const fields = [
  { text: 'Total Balance', dataKey: 'total_balance', className: 'text-left', mobileClassName: 'col-12 col-sm-6' },
  { text: 'Free Balance', dataKey: 'free_balance', className: 'text-left', mobileClassName: 'col-12 col-sm-6' },
  { text: 'Nonce', dataKey: 'nonce', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Active', dataKey: 'active', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Past Roles', dataKey: 'past_roles', className: 'text-left', mobileClassName: 'col-12' },
]

export const render = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'total_balance':
    case 'free_balance':
      return (
        <>
          <FormattedNumber value={data[dataKey]} format='decimal' />
          &nbsp;CAPS
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
