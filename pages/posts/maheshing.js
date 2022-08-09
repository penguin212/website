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
                    <th>Roger</th>
                </tr>
                <tr>
                    <th>Angee</th>
                    <td></td>
                    <td>Angeo</td>
                    <td>Omgee</td>
                    <td>Rogee</td>
                </tr>
                <tr>
                    <th>Leo</th>
                    <td>Angeo</td>
                    <td></td>
                    <td>Leom</td>
                    <td>Leoger</td>
                </tr>
                <tr>
                    <th>Om</th>
                    <td>Omgee</td>
                    <td>Leom</td>
                    <td></td>
                    <td>Rom</td>
                </tr>
                <tr>
                    <th>Roger</th>
                    <td>Rogee</td>
                    <td>Leoger</td>
                    <td>Rom</td>
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