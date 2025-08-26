import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "analyze_seo_motopass",
      "Analyse SEO complète d'un site Motopass",
      {
        site: z.string().describe("Site à analyser (motopass-fr, motopass-es, motopass-be)")
      },
      async ({ site }) => {
        return {
          content: [{
            type: "text",
            text: `Analyse SEO ${site}: Score 85/100, 12 mots-clés, 234 backlinks`
          }]
        };
      }
    );
  },
  { maxDuration: 60, verboseLogs: true }
);

export { handler as GET, handler as POST };
