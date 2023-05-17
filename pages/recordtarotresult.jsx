import RecordResult from "@/components/TarotReadingResult/tarotreadingresult";
import Head from 'next/head'

export default function TarotReadingResultViewPage() {
    return (
        <div>
            <Head>
                <title>TarotResult Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <RecordResult />
        </div>
    )
}