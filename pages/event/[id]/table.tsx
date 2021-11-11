export const eventFields = [
  { text: 'Block', dataKey: 'block_id' },
  { text: 'Referenced Extrinsic', dataKey: 'extrinsic_index' },
  { text: 'Event Index', dataKey: 'event_index' },
  { text: 'Module', dataKey: 'module' },
  { text: 'Event name', dataKey: 'call'},
  { text: 'Description', dataKey: 'description'},
]

export const eventRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    default:
      return <span className="textToken">{record[dataKey]}</span>
  }
}

export default {
  eventFields,
  eventRender
}
