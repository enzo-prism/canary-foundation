import { useEffect } from "react";
import { PublishedTeamUpdateReport } from "@/components/team-updates/published-team-update";
import { TeamUpdatesLayout } from "@/components/team-updates/team-updates-layout";
import { ovarianJune2026Update } from "@/data/team-updates";

export default function OvarianJune2026TeamUpdate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TeamUpdatesLayout>
      <PublishedTeamUpdateReport update={ovarianJune2026Update} />
    </TeamUpdatesLayout>
  );
}
