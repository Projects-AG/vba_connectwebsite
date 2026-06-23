import PageWrapper from '../components/PageWrapper'
import LeaderHero from '../sections/LeaderHero'
import NewsFeed from '../sections/NewsFeed'
import Philosophy from '../sections/Philosophy'
import HistoryTimeline from '../sections/HistoryTimeline'
import KeyIssues from '../sections/KeyIssues'
import Wings from '../sections/Wings'
import Security from '../sections/Security'
import MembershipCTA from '../sections/MembershipCTA'

export default function Home() {
  return (
    <PageWrapper>
      <LeaderHero />
      <NewsFeed />
      <Philosophy />
      <HistoryTimeline />
      <KeyIssues />
      <Wings />
      <Security />
      <MembershipCTA />
    </PageWrapper>
  )
}
