import { blockFields } from '@/fields/blockFields'
import { link } from '@/fields/link'
import { Block } from 'payload'

export const Slider: Block = {
  slug: 'slider',
  interfaceName: 'Slider',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
  fields: [
    blockFields({
      name: 'sliderFields',
      fields: [
        {
          name: 'introContent',
          type: 'richText',
        },
        {
          name: 'slides',
          label: 'Slides',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            { name: 'imageContent', type: 'richText' },
            {
              name: 'enableLink',
              type: 'checkbox',
              label: 'Enable Link',
            },
            link({
              appearances: false,
              overrides: {
                admin: {
                  condition: (_, siblingData) => siblingData?.enableLink,
                },
              },
            }),
          ],
          minRows: 2,
          required: true,
        },
      ],
    }),
  ],
}
