import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1><Link href="/"> menu </Link></h1>
            <table>
                <tr>
                    <th></th>
                    <th>Angee</th>
                    <th>Leo</th>
                    <th>Om</th>
                </tr>
                <tr>
                    <th>Angee</th>
                    <td></td>
                    <td>Angeo</td>
                    <td>Omgee</td>
                </tr>
                <tr>
                    <th>Leo</th>
                    <td>Angeo</td>
                    <td></td>
                    <td>Leom</td>
                </tr>
                <tr>
                    <th>Om</th>
                    <td>Omgee</td>
                    <td>Leom</td>
                    <td></td>
                </tr>
            </table>
            <style jsx>{`
            a {
                color: #0070f3;
            }

            `}</style>
        </>
    )
}