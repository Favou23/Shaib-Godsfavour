import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ context }) => {
        if (context.skipSiteRevalidation) return

        const { revalidatePath } = await import('next/cache')
        revalidatePath('/', 'layout')
      },
    ],
  },
  fields: [
    {
      name: 'about',
      type: 'group',
      label: 'About',
      admin: {
        description: 'Homepage intro under your name.',
      },
      fields: [
        {
          name: 'role',
          type: 'text',
          defaultValue: 'Software Engineer',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'AI Engineer',
        },
        {
          name: 'intro',
          type: 'textarea',
          admin: {
            description: 'First paragraph. Highlighted terms below are emphasized automatically.',
          },
        },
        {
          name: 'body',
          type: 'textarea',
          admin: {
            description:
              'Second paragraph. Add links with [[label|/path]], e.g. [[write|/articles]].',
          },
        },
        {
          name: 'highlights',
          type: 'array',
          labels: {
            singular: 'Highlight',
            plural: 'Highlights',
          },
          admin: {
            description: 'Words or phrases to emphasize in the intro paragraph.',
          },
          fields: [
            {
              name: 'term',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      admin: {
        description: 'WhatsApp and other direct contact options.',
      },
      fields: [
        {
          name: 'whatsappPhone',
          type: 'text',
          admin: {
            description:
              'Digits only with country code (no + or spaces). Example: 2348012345678.',
          },
        },
        {
          name: 'whatsappMessage',
          type: 'textarea',
          defaultValue:
            'Hello Shaib, I came from your website and would like to talk.',
          admin: {
            description: 'Prefill message when someone opens WhatsApp.',
          },
        },
      ],
    },
    {
      name: 'resume',
      type: 'group',
      label: 'Resume / CV',
      admin: {
        description:
          'Public resume link used in the footer, contact page, and experience page.',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Resume URL',
          admin: {
            description:
              'Google Drive, Dropbox, or any public CV link. No code change needed after updating.',
            placeholder: 'https://drive.google.com/file/d/.../view',
          },
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      label: 'Experience',
      labels: {
        singular: 'Role',
        plural: 'Roles',
      },
      admin: {
        description: 'Selective roles shown on the homepage (impact over job history).',
      },
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'badge',
          type: 'text',
          admin: {
            description: 'Optional chip next to the role (e.g. Promoted to Team Lead).',
          },
        },
        {
          name: 'period',
          type: 'text',
          admin: {
            description: 'e.g. 2023 — Present',
          },
        },
        {
          name: 'summary',
          type: 'textarea',
          admin: {
            description: 'One-line scope for the role.',
          },
        },
        {
          name: 'highlights',
          type: 'array',
          labels: {
            singular: 'Highlight',
            plural: 'Highlights',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      labels: {
        singular: 'Nav Link',
        plural: 'Nav Links',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      labels: {
        singular: 'Social Link',
        plural: 'Social Links',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'uri',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      admin: {
        description:
          'Copyright line. Year is generated automatically from the current date.',
      },
      fields: [
        {
          name: 'copyrightName',
          type: 'text',
          defaultValue: 'Shaib Godsfavour',
          admin: {
            description: 'Shown as © {year} NAME',
          },
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: 'LAGOS, NIGERIA',
        },
        {
          name: 'timezone',
          type: 'text',
          defaultValue: 'Africa/Lagos',
          admin: {
            description:
              'IANA timezone (e.g. Africa/Lagos). Offset is computed live as UTC±X — not stored as a fixed string.',
          },
        },
      ],
    },
    {
      name: 'footerColumns',
      type: 'array',
      labels: {
        singular: 'Footer Column',
        plural: 'Footer Columns',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'isEmail',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}
