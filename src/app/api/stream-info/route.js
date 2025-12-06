import { NextResponse } from "next/server";

export async function GET() {
  // We use the "clean" URL without the jQuery callback junk
  const STREAM_URL =
    "https://dione.shoutca.st/external/rpc.php?m=streaminfo.get&username=radiorama";

  try {
    const response = await fetch(STREAM_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; MyMusicApp/1.0)",
      },
      next: { revalidate: 10 }, // Cache this data for 10 seconds to save bandwidth
    });

    if (!response.ok) {
      throw new Error(`External server error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Stream info fetch failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch stream info" },
      { status: 500 }
    );
  }
}
