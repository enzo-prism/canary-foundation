import { useEffect } from "react";
import { PublishedTeamUpdateReport } from "@/components/team-updates/published-team-update";
import { TeamUpdatesLayout } from "@/components/team-updates/team-updates-layout";
import { pancreasJuly2026Update } from "@/data/team-updates";

export default function PancreasJuly2026TeamUpdate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TeamUpdatesLayout>
      <PublishedTeamUpdateReport update={pancreasJuly2026Update} />
    </TeamUpdatesLayout>
  );
}
