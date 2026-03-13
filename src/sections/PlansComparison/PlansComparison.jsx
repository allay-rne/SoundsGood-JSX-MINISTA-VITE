import './PlansComparison.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import Badge from "@/components/Badge";
import Table from "@/components/Table";
import Specifications from "@/components/Specifications";
import Tabs from "@/components/Tabs";

const PlansComparison = () => {
  const headCells = [
    {
      children: 'Feature',
      width: '25%'
    },

    {
      children: <>Music Plan <Badge mode="accent">Popular</Badge></>,
      width: '25%',
      tabsTitle: 'Music',
    },

    {
      children: 'Artist Plan',
      width: '25%',
      tabsTitle: 'Artist',
    },

    {
      children: 'Pro Plan',
      width: '25%',
      tabsTitle: 'Pro',
    },
  ]

  const rows = [
    {
      cells: [
        'Ad-free streaming',
        'Unlimited',
        'Upload only',
        'Unlimited',
      ]
    },

    {
      cells: [
        'Offline listening',
        'Download thousands of tracks for offline playback across all devices',
        'No',
        'Unlimited offline downloads with automatic sync',
      ],
      isWide: true,
    },

    {
      cells: [
        'Personal playlists',
        'Unlimited playlist creation with smart shuffle & cross-device sync',
        'No',
        'Unlimited playlists + collaborative editing & sharing',
      ],
      isWide: true,
    },

    {
      cells: [
        'Skips',
        'Unlimited',
        'No',
        'Unlimited',
      ],
    },

    {
      cells: [
        'Track uploads',
        'No',
        'Unlimited',
        'Unlimited',
      ]
    },

    {
      cells: [
        'Distribution',
        'No',
        'All platforms',
        'All platforms',
      ]
    },

    {
      cells: [
        'Earnings withdrawal',
        'No',
        '10% commission',
        '5% commission',
      ]
    },

    {
      cells: [
        'Income analytics',
        'No',
        'Detailed',
        'Advanced',
      ]
    },

    {
      cells: [
        'Support',
        'Standard',
        'Priority',
        'Fast',
      ]
    },

    {
      cells: [
        'Price/year',
        <strong>$41.99</strong>,
        <strong>$89.99</strong>,
        <strong>$107.99</strong>,
      ]
    },
  ]

  const tabsItems = headCells
    .filter((headCell) => headCell.tabsTitle)
    .map((headCell, headCellIndex) => ({
      title: headCell.tabsTitle,
      isActive: headCellIndex === 0,
      children: (
        <Specifications
          items={rows.map(({ cells, isWide }) => ({
            key: cells[0],
            value: cells[headCellIndex + 1],
            isWide,
          }))}
        />
      )
    }))

  return (
    <Section
      title="Compare our plans and find the right one for you"
      titleId="plans-comparison-title"
      description="SoundsGood offers three different plans to fit your needs: Music, Artist, and Pro Plans. Compare the features of each plan and choose the one that's right for you."
    >
      <Table
        className="hidden-mobile"
        headCells={headCells}
        rows={rows}
      />
      <Tabs
        className="visible-mobile"
        title="plans-comparison-tabs-title"
        items={tabsItems}
      />
    </Section>
  )
}

export default PlansComparison
