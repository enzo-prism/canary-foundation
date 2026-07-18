import { useEffect } from "react";
import { PublishedTeamUpdateReport } from "@/components/team-updates/published-team-update";
import { TeamUpdatesLayout } from "@/components/team-updates/team-updates-layout";
import { prostateJuly2026Update } from "@/data/team-updates";

export default function ProstateJuly2026TeamUpdate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TeamUpdatesLayout>
      <PublishedTeamUpdateReport update={prostateJuly2026Update} />
    </TeamUpdatesLayout>
  );
}
