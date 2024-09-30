import scss from './Policy.module.scss';
import { italiana } from '@/app/ui';
import clsx from 'clsx';
import Container from '../Container';
import Link from 'next/link';

const Policy = () => {
    return (
        <section className={scss.section}>
            <Container>
                <h2 className={clsx(scss.title, italiana.className)}>
                    DATENSCHUTZERKLÄRUNG
                </h2>
                <div className={scss.text_wrapper}>
                    <h1 className={scss.text}>DATENSCHUTZERKLÄRUNG</h1>
                    <h2 className={scss.text}>
                        1. Datenerfassung auf unserer Website
                    </h2>

                    <h3 className={scss.text}>
                        Wer ist verantwortlich für die Datenerfassung auf dieser
                        Website?
                    </h3>
                    <p className={scss.text}>
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Impressum dieser Website entnehmen.
                    </p>

                    <h3 className={scss.text}>Wie erfassen wir Ihre Daten?</h3>
                    <p className={scss.text}>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z. B. um Daten
                        handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className={scss.text}>
                        Andere Daten werden automatisch beim Besuch der Website
                        durch unsere IT-Systeme erfasst. Das sind vor allem
                        technische Daten (z. B. Internetbrowser, Betriebssystem
                        oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                        Daten erfolgt automatisch, sobald Sie unsere Website
                        betreten.
                    </p>

                    <h3 className={scss.text}>Wofür nutzen wir Ihre Daten?</h3>
                    <p className={scss.text}>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der Website zu gewährleisten. Andere
                        Daten können zur Analyse Ihres Nutzerverhaltens
                        verwendet werden.
                    </p>

                    <h3 className={scss.text}>
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </h3>
                    <p className={scss.text}>
                        Sie haben jederzeit das Recht unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung, Sperrung oder Löschung
                        dieser Daten zu verlangen. Hierzu sowie zu weiteren
                        Fragen zum Thema Datenschutz können Sie sich jederzeit
                        unter der im Impressum angegebenen Adresse an uns
                        wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei
                        der zuständigen Aufsichtsbehörde zu.
                    </p>
                    <p className={scss.text}>
                        Außerdem haben Sie das Recht, unter bestimmten Umständen
                        die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Details hierzu
                        entnehmen Sie der Datenschutzerklärung unter „Recht auf
                        Einschränkung der Verarbeitung“.
                    </p>

                    <h3 className={scss.text}>
                        Analyse-Tools und Tools von Drittanbietern
                    </h3>
                    <p className={scss.text}>
                        Beim Besuch unserer Website kann Ihr Surf-Verhalten
                        statistisch ausgewertet werden. Das geschieht vor allem
                        mit Cookies und mit sogenannten Analyseprogrammen. Die
                        Analyse Ihres Surf-Verhaltens erfolgt in der Regel
                        anonym; das Surf-Verhalten kann nicht zu Ihnen
                        zurückverfolgt werden.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Sie können dieser Analyse widersprechen oder sie durch
                        die Nichtbenutzung bestimmter Tools verhindern.
                        Detaillierte Informationen zu diesen Tools und über Ihre
                        Widerspruchsmöglichkeiten finden Sie in der folgenden
                        Datenschutzerklärung.
                    </p>
                    <h2 className={scss.text}>
                        2. Allgemeine Hinweise und Pflichtinformationen
                    </h2>

                    <h3 className={scss.text}>Datenschutz</h3>
                    <p className={scss.text}>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend der
                        gesetzlichen Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung.
                    </p>
                    <p className={scss.text}>
                        Wenn Sie diese Website benutzen, werden verschiedene
                        personenbezogene Daten erhoben. Personenbezogene Daten
                        sind Daten, mit denen Sie persönlich identifiziert
                        werden können. Die vorliegende Datenschutzerklärung
                        erläutert, welche Daten wir erheben und wofür wir sie
                        nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                        geschieht.
                    </p>
                    <p className={scss.text}>
                        Wir weisen darauf hin, dass die Datenübertragung im
                        Internet (z. B. bei der Kommunikation per E-Mail)
                        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                        der Daten vor dem Zugriff durch Dritte ist nicht
                        möglich.
                    </p>

                    <h3 className={scss.text}>
                        Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p className={clsx(scss.text, scss.margin)}>
                        Die verantwortliche Stelle für die Datenverarbeitung auf
                        dieser Website ist:
                    </p>
                    <p className={scss.text}> Uliana Eremenko</p>
                    <p className={scss.text}>Linien str. 154 A, 10115 Berlin</p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Impressum:{' '}
                        <Link href="/impressum" target="_blank">
                            https://www.allure-studio.de/impressum
                        </Link>
                    </p>
                    <p className={scss.text}>
                        Verantwortliche Stelle ist die natürliche oder
                        juristische Person, die allein oder gemeinsam mit
                        anderen über die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o.
                        Ä.) entscheidet.
                    </p>

                    <h3 className={scss.text}>
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                    </h3>
                    <p className={scss.text}>
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                        reicht eine formlose Mitteilung per E-Mail an uns. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>

                    <h3 className={scss.text}>
                        Widerspruchsrecht gegen die Datenerhebung in besonderen
                        Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                    </h3>
                    <p className={scss.text}>
                        Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs.
                        1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das
                        Recht, aus Gründen, die sich aus Ihrer besonderen
                        Situation ergeben, gegen die Verarbeitung Ihrer
                        personenbezogenen Daten Widerspruch einzulegen; dies
                        gilt auch für ein auf diese Bestimmungen gestütztes
                        Profiling.
                    </p>
                    <p className={scss.text}>
                        Die jeweilige Rechtsgrundlage, auf denen eine
                        Verarbeitung beruht, entnehmen Sie dieser
                        Datenschutzerklärung. Wenn Sie Widerspruch einlegen,
                        werden wir Ihre betroffenen personenbezogenen Daten
                        nicht mehr verarbeiten, es sei denn, wir können
                        zwingende schutzwürdige Gründe für die Verarbeitung
                        nachweisen, die Ihre Interessen, Rechte und Freiheiten
                        überwiegen oder die Verarbeitung dient der
                        Geltendmachung, Ausübung oder Verteidigung von
                        Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1
                        DSGVO).
                    </p>
                    <p className={scss.text}>
                        Werden Ihre personenbezogenen Daten verarbeitet, um
                        Direktwerbung zu betreiben, so haben Sie das Recht,
                        jederzeit Widerspruch gegen die Verarbeitung Sie
                        betreffender personenbezogener Daten zum Zwecke
                        derartiger Werbung einzulegen; dies gilt auch für das
                        Profiling, soweit es mit solcher Direktwerbung in
                        Verbindung steht. Wenn Sie widersprechen, werden Ihre
                        personenbezogenen Daten anschließend nicht mehr zum
                        Zwecke der Direktwerbung verwendet (Widerspruch nach
                        Art. 21 Abs. 2 DSGVO).
                    </p>
                    <p className={scss.text}>
                        Beschwerderecht bei der zuständigen Aufsichtsbehörde Im
                        Falle von Verstößen gegen die DSGVO steht den
                        Betroffenen ein Beschwerderecht bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                        ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                        oder des Orts des mutmaßlichen Verstoßes zu. Das
                        Beschwerderecht besteht unbeschadet anderweitiger
                        verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        Eine Liste der Datenschutzbeauftragten sowie deren
                        Kontaktdaten können folgendem Link entnommen werden:
                        https://www.bfdi.bund.de/DE/Service/Anschriften/
                        anschriften_table.html (Deutschland) und
                        https://www.dsb.gv.at/ueber-die-website/kontakt.html
                        (Österreich).
                    </p>
                    <p className={scss.text}>
                        Maßgebliche Rechtsgrundlagen Im Folgenden erhalten Sie
                        eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren
                        Basis wir personenbezogene Daten verarbeiten. Bitte
                        nehmen Sie zur Kenntnis, dass neben den Regelungen der
                        DSGVO nationale Datenschutzvorgaben in Ihrem bzw.
                        unserem Wohn- oder Sitzland gelten können. Sollten
                        ferner im Einzelfall speziellere Rechtsgrundlagen
                        maßgeblich sein, teilen wir Ihnen diese in der
                        Datenschutzerklärung mit.
                    </p>
                    <p className={scss.text}>
                        Recht auf Datenübertragbarkeit Sie haben das Recht,
                        Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                        Erfüllung eines Vertrags automatisiert verarbeiten, an
                        sich oder an einen Dritten in einem gängigen,
                        maschinenlesbaren Format aushändigen zu lassen. Sofern
                        Sie die direkte Übertragung der Daten an einen anderen
                        Verantwortlichen verlangen, erfolgt dies nur, soweit es
                        technisch machbar ist.
                    </p>
                    <p className={scss.text}>
                        SSL- bzw. TLS-Verschlüsselung Diese Seite nutzt aus
                        Sicherheitsgründen und zum Schutz der Übertragung
                        vertraulicher Inhalte, wie zum Beispiel Bestellungen
                        oder Anfragen, die Sie an uns als Seitenbetreiber
                        senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                        verschlüsselte Verbindung erkennen Sie daran, dass die
                        Adresszeile des Browsers von „http://“ auf „https://“
                        wechselt und an dem Schloss-Symbol in Ihrer
                        Browserzeile.
                    </p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                        können die Daten, die Sie an uns übermitteln, nicht von
                        Dritten mitgelesen werden.
                    </p>
                    <p className={scss.text}>
                        Verschlüsselter Zahlungsverkehr Besteht nach dem
                        Abschluss eines kostenpflichtigen Vertrags eine
                        Verpflichtung, uns Ihre Zahlungsdaten (z. B. Kontonummer
                        bei Einzugsermächtigung) zu übermitteln, werden diese
                        Daten zur Zahlungsabwicklung benötigt. Der
                        Zahlungsverkehr über die gängigen Zahlungsmittel
                        (Visa/MasterCard, Lastschriftverfahren) erfolgt
                        ausschließlich über eine verschlüsselte SSL- bzw.
                        TLS-Verbindung. Eine verschlüsselte Verbindung erkennen
                        Sie daran, dass die Adresszeile des Browsers von
                        „http://“ auf „https://“ wechselt und an dem
                        Schloss-Symbol in Ihrer Browserzeile. Bei
                        verschlüsselter Kommunikation können Ihre Zahlungsdaten,
                        die Sie an uns übermitteln, nicht von Dritten mitgelesen
                        werden.
                    </p>

                    <p className={scss.text}>
                        Auskunft, Sperrung, Löschung und Berichtigung Sie haben
                        im Rahmen der geltenden gesetzlichen Bestimmungen
                        jederzeit das Recht auf unentgeltliche Auskunft über
                        Ihre gespeicherten personenbezogenen Daten, deren
                        Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung und ggf. ein Recht auf Berichtigung,
                        Sperrung oder Löschung dieser Daten. Hierzu sowie zu
                        weiteren Fragen zum Thema personenbezogene Daten können
                        Sie sich jederzeit unter der im Impressum angegebenen
                        Adresse an uns wenden.
                    </p>
                    <p className={scss.text}>
                        Recht auf Einschränkung der Verarbeitung Sie haben das
                        Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Hierzu können Sie
                        sich jederzeit unter der im Impressum angegebenen
                        Adresse an uns wenden. Das Recht auf Einschränkung der
                        Verarbeitung besteht in folgenden Fällen:
                    </p>

                    <p className={scss.text}>
                        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                        personenbezogenen Daten bestreiten, benötigen wir in der
                        Regel Zeit, um dies zu überprüfen. Für die Dauer der
                        Prüfung haben Sie das Recht, die Einschränkung der
                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                    <p className={scss.text}>
                        Wenn die Verarbeitung Ihrer personenbezogenen Daten
                        unrechtmäßig geschah/geschieht, können Sie statt der
                        Löschung die Einschränkung der Datenverarbeitung
                        verlangen.
                    </p>

                    <p className={scss.text}>
                        Wenn wir Ihre personenbezogenen Daten nicht mehr
                        benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                        oder Geltendmachung von Rechtsansprüchen benötigen,
                        haben Sie das Recht, statt der Löschung die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten zu verlangen.
                    </p>

                    <p className={scss.text}>
                        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                        eingelegt haben, muss eine Abwägung zwischen Ihren und
                        unseren Interessen vorgenommen werden. Solange noch
                        nicht feststeht, wessen Interessen überwiegen, haben Sie
                        das Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                        eingeschränkt haben, dürfen diese Daten – von ihrer
                        Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                        zur Geltendmachung, Ausübung oder Verteidigung von
                        Rechtsansprüchen oder zum Schutz der Rechte einer
                        anderen natürlichen oder juristischen Person oder aus
                        Gründen eines wichtigen öffentlichen Interesses der
                        Europäischen Union oder eines Mitgliedstaats verarbeitet
                        werden.
                    </p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Widerspruch gegen Werbe-Mails Der Nutzung von im Rahmen
                        der Impressumspflicht veröffentlichten Kontaktdaten zur
                        Übersendung von nicht ausdrücklich angeforderter Werbung
                        und Informationsmaterialien wird hiermit widersprochen.
                        Die Betreiber der Seiten behalten sich ausdrücklich
                        rechtliche Schritte im Falle der unverlangten Zusendung
                        von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                    <p className={scss.text}>
                        3. Datenerfassung auf unserer Website
                    </p>

                    <p className={scss.text}>
                        Cookies Die Internetseiten verwenden teilweise so
                        genannte Cookies. Cookies richten auf Ihrem Rechner
                        keinen Schaden an und enthalten keine Viren. Cookies
                        dienen dazu, unser Angebot nutzerfreundlicher,
                        effektiver und sicherer zu machen. Cookies sind kleine
                        Textdateien, die auf Ihrem Rechner abgelegt werden und
                        die Ihr Browser speichert.
                    </p>

                    <p className={scss.text}>
                        Die meisten der von uns verwendeten Cookies sind so
                        genannte „Session-Cookies“. Sie werden nach Ende Ihres
                        Besuchs automatisch gelöscht. Andere Cookies bleiben auf
                        Ihrem Endgerät gespeichert bis Sie diese löschen. Diese
                        Cookies ermöglichen es uns, Ihren Browser beim nächsten
                        Besuch wiederzuerkennen.
                    </p>

                    <p className={scss.text}>
                        Sie können Ihren Browser so einstellen, dass Sie über
                        das Setzen von Cookies informiert werden und Cookies nur
                        im Einzelfall erlauben, die Annahme von Cookies für
                        bestimmte Fälle oder generell ausschließen sowie das
                        automatische Löschen der Cookies beim Schließen des
                        Browser aktivieren. Bei der Deaktivierung von Cookies
                        kann die Funktionalität dieser Website eingeschränkt
                        sein.
                    </p>
                    <p className={scss.text}>
                        Cookies, die zur Durchführung des elektronischen
                        Kommunikationsvorgangs oder zur Bereitstellung
                        bestimmter, von Ihnen erwünschter Funktionen (z. B.
                        Warenkorbfunktion) erforderlich sind, werden auf
                        Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
                        Der Websitebetreiber hat ein berechtigtes Interesse an
                        der Speicherung von Cookies zur technisch fehlerfreien
                        und optimierten Bereitstellung seiner Dienste. Soweit
                        andere Cookies (z. B. Cookies zur Analyse Ihres
                        Surfverhaltens) gespeichert werden, werden diese in
                        dieser Datenschutzerklärung gesondert behandelt.
                    </p>

                    <p className={scss.text}>
                        Server-Log-Dateien Der Provider der Seiten erhebt und
                        speichert automatisch Informationen in so genannten
                        Server-Log-Dateien, die Ihr Browser automatisch an uns
                        übermittelt. Dies sind:
                    </p>
                    <p className={scss.text}>Browsertyp und Browserversion</p>
                    <p className={scss.text}>verwendetes Betriebssystem</p>
                    <p className={scss.text}>
                        Hostname des zugreifenden Rechners Uhrzeit der
                        Serveranfrage IP-Adresse Eine Zusammenführung dieser
                        Daten mit anderen Datenquellen wird nicht vorgenommen.
                        Die Erfassung dieser Daten erfolgt auf Grundlage von
                        Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                        berechtigtes Interesse an der technisch fehlerfreien
                        Darstellung und der Optimierung seiner Website - hierzu
                        müssen die Server-Log-Files erfasst werden.
                    </p>

                    <p className={scss.text}>
                        Kontaktformular Wenn Sie uns per Kontaktformular
                        Anfragen zukommen lassen, werden Ihre Angaben aus dem
                        Anfrageformular inklusive der von Ihnen dort angegebenen
                        Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                        Fall von Anschlussfragen bei uns gespeichert. Diese
                        Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                        Verarbeitung der in das Kontaktformular eingegebenen
                        Daten erfolgt somit ausschließlich auf Grundlage Ihrer
                        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können
                        diese Einwilligung jederzeit widerrufen. Dazu reicht
                        eine formlose Mitteilung per E-Mail an uns. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitungsvorgänge bleibt vom Widerruf
                        unberührt. Die von Ihnen im Kontaktformular eingegebenen
                        Daten verbleiben bei uns, bis Sie uns zur Löschung
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen
                        oder der Zweck für die Datenspeicherung entfällt (z. B.
                        nach abgeschlossener Bearbeitung Ihrer Anfrage).
                        Zwingende gesetzliche Bestimmungen - insbesondere
                        Aufbewahrungsfristen - bleiben unberührt.
                    </p>
                    <p className={scss.text}>
                        Anfrage per E-Mail, Telefon oder Telefax Wenn Sie uns
                        per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
                        Anfrage inklusive aller daraus hervorgehenden
                        personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                        Bearbeitung Ihres Anliegens bei uns gespeichert und
                        verarbeitet. Diese Daten geben wir nicht ohne Ihre
                        Einwilligung weiter. Die Verarbeitung dieser Daten
                        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                        sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                        zusammenhängt oder zur Durchführung vorvertraglicher
                        Maßnahmen erforderlich ist. In allen übrigen Fällen
                        beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6
                        Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten
                        Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
                        berechtigtes Interesse an der effektiven Bearbeitung der
                        an uns gerichteten Anfragen haben.
                    </p>
                    <p className={scss.text}>
                        Die von Ihnen an uns per Kontaktanfragen übersandten
                        Daten verbleiben bei uns, bis Sie uns zur Löschung
                        auffordern, Ihre Einwilligung zur Speicherung widerrufen
                        oder der Zweck für die Datenspeicherung entfällt (z. B.
                        nach abgeschlossener Bearbeitung Ihres Anliegens).
                        Zwingende gesetzliche Bestimmungen - insbesondere
                        gesetzliche Aufbewahrungsfristen - bleiben unberührt.
                    </p>
                    <p className={scss.text}>
                        Verarbeiten von Daten (Kunden- und Vertragsdaten) Wir
                        erheben, verarbeiten und nutzen personenbezogene Daten
                        nur, soweit sie für die Begründung, inhaltliche
                        Ausgestaltung oder Änderung des Rechtsverhältnisses
                        erforderlich sind (Bestandsdaten). Dies erfolgt auf
                        Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die
                        Verarbeitung von Daten zur Erfüllung eines Vertrags oder
                        vorvertraglicher Maßnahmen gestattet. Personenbezogene
                        Daten über die Inanspruchnahme unserer Internetseiten
                        (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur,
                        soweit dies erforderlich ist, um dem Nutzer die
                        Inanspruchnahme des Dienstes zu ermöglichen oder
                        abzurechnen.
                    </p>
                    <p className={scss.text}>
                        Die erhobenen Kundendaten werden nach Abschluss des
                        Auftrags oder Beendigung der Geschäftsbeziehung
                        gelöscht. Gesetzliche Aufbewahrungsfristen bleiben
                        unberührt.
                    </p>
                    <p className={scss.text}>
                        Datenübermittlung bei Vertragsschluss für Online-Shops,
                        Händler und Warenversand Wir übermitteln
                        personenbezogene Daten an Dritte nur dann, wenn dies im
                        Rahmen der Vertragsabwicklung notwendig ist, etwa an die
                        mit der Lieferung der Ware betrauten Unternehmen oder
                        das mit der Zahlungsabwicklung beauftragte
                        Kreditinstitut. Eine weitergehende Übermittlung der
                        Daten erfolgt nicht bzw. nur dann, wenn Sie der
                        Übermittlung ausdrücklich zugestimmt haben. Eine
                        Weitergabe Ihrer Daten an Dritte ohne ausdrückliche
                        Einwilligung, etwa zu Zwecken der Werbung, erfolgt
                        nicht. Grundlage für die Datenverarbeitung ist Art. 6
                        Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                        Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                        gestattet.
                    </p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Datenübermittlung bei Vertragsschluss für
                        Dienstleistungen und digitale Inhalte Wir übermitteln
                        personenbezogene Daten an Dritte nur dann, wenn dies im
                        Rahmen der Vertragsabwicklung notwendig ist, etwa an das
                        mit der Zahlungsabwicklung beauftragte Kreditinstitut.
                        Eine weitergehende Übermittlung der Daten erfolgt nicht
                        bzw. nur dann, wenn Sie der Übermittlung ausdrücklich
                        zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte
                        ohne ausdrückliche Einwilligung, etwa zu Zwecken der
                        Werbung, erfolgt nicht. Grundlage für die
                        Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der
                        die Verarbeitung von Daten zur Erfüllung eines Vertrags
                        oder vorvertraglicher Maßnahmen gestattet.
                    </p>
                    <p className={scss.text}>Plugins und Tools</p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Google Web Fonts Diese Seite nutzt zur einheitlichen
                        Darstellung von Schriftarten so genannte Web Fonts, die
                        von Google bereitgestellt werden. Die Google Fonts sind
                        lokal installiert. Eine Verbindung zu Servern von Google
                        findet dabei nicht statt.
                    </p>

                    <p className={scss.text}>
                        Google Maps Diese Seite nutzt über eine API den
                        Kartendienst Google Maps. Anbieter ist die Google
                        Ireland Limited („Google“), Gordon House, Barrow Street,
                        Dublin 4, Irland. Zur Nutzung der Funktionen von Google
                        Maps ist es notwendig, Ihre IP Adresse zu speichern.
                        Diese Informationen werden in der Regel an einen Server
                        von Google in den USA übertragen und dort gespeichert.
                        Der Anbieter dieser Seite hat keinen Einfluss auf diese
                        Datenübertragung.
                    </p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Die Nutzung von Google Maps erfolgt im Interesse einer
                        ansprechenden Darstellung unserer Online-Angebote und an
                        einer leichten Auffindbarkeit der von uns auf der
                        Website angegebenen Orte. Dies stellt ein berechtigtes
                        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie
                        in der Datenschutzerklärung von Google:
                        https://policies.google.com/privacy?hl=de
                    </p>
                    <p className={scss.text}>
                        Google reCAPTCHA Wir nutzen „Google reCAPTCHA“ (im
                        Folgenden „reCAPTCHA“) auf unseren Websites. Anbieter
                        ist die Google Ireland Limited („Google“), Gordon House,
                        Barrow Street, Dublin 4, Irland.
                    </p>

                    <p className={scss.text}>
                        Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe
                        auf unseren Websites (z. B. in einem Kontaktformular)
                        durch einen Menschen oder durch ein automatisiertes
                        Programm erfolgt. Hierzu analysiert reCAPTCHA das
                        Verhalten des Websitebesuchers anhand verschiedener
                        Merkmale. Diese Analyse beginnt automatisch, sobald der
                        Websitebesucher die Website betritt. Zur Analyse wertet
                        reCAPTCHA verschiedene Informationen aus (z. B.
                        IP-Adresse, Verweildauer des Websitebesuchers auf der
                        Website oder vom Nutzer getätigte Mausbewegungen). Die
                        bei der Analyse erfassten Daten werden an Google
                        weitergeleitet.
                    </p>

                    <p className={scss.text}>
                        Die reCAPTCHA-Analysen laufen vollständig im
                        Hintergrund. Websitebesucher werden nicht darauf
                        hingewiesen, dass eine Analyse stattfindet.
                    </p>

                    <p className={scss.text}>
                        Die Datenverarbeitung erfolgt auf Grundlage von Art. 6
                        Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                        berechtigtes Interesse daran, seine Webangebote vor
                        missbräuchlicher automatisierter Ausspähung und vor SPAM
                        zu schützen.
                    </p>

                    <p className={clsx(scss.text, scss.margin)}>
                        Weitere Informationen zu Google reCAPTCHA sowie die
                        Datenschutzerklärung von Google entnehmen Sie folgenden
                        Links:
                        <Link
                            href="https://policies.google.com/privacy?hl=de"
                            target="_blank"
                        >
                            https://policies.google.com/privacy?hl=de
                        </Link>
                        und
                        <Link
                            href="https://www.google.com/recaptcha/intro/v3.html"
                            target="_blank"
                        >
                            https://www.google.com/recaptcha/intro/v3.html
                        </Link>
                    </p>
                    <p className={scss.text}>
                        Google Analytics Diese Website nutzt Funktionen des
                        Webanalysedienstes Google Analytics. Anbieter ist die
                        Google Ireland Limited („Google“), Gordon House, Barrow
                        Street, Dublin 4, Irland.
                    </p>
                    <p className={scss.text}>
                        Google Analytics verwendet so genannte „Cookies“. Das
                        sind Textdateien, die auf Ihrem Computer gespeichert
                        werden und die eine Analyse der Benutzung der Website
                        durch Sie ermöglichen. Die durch den Cookie erzeugten
                        Informationen über Ihre Benutzung dieser Website werden
                        in der Regel an einen Server von Google in den USA
                        übertragen und dort gespeichert.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Die Speicherung von Google-Analytics-Cookies und die
                        Nutzung dieses Analyse-Tools erfolgen auf Grundlage von
                        Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                        berechtigtes Interesse an der Analyse des
                        Nutzerverhaltens, um sowohl sein Webangebot als auch
                        seine Werbung zu optimieren.
                    </p>
                    <p className={scss.text}>
                        IP-Anonymisierung Wir haben auf dieser Website die
                        Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre
                        IP-Adresse von Google innerhalb von Mitgliedstaaten der
                        Europäischen Union oder in anderen Vertragsstaaten des
                        Abkommens über den Europäischen Wirtschaftsraum vor der
                        Übermittlung in die USA gekürzt. Nur in Ausnahmefällen
                        wird die volle IP-Adresse an einen Server von Google in
                        den USA übertragen und dort gekürzt.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Im Auftrag des Betreibers dieser Website wird Google
                        diese Informationen benutzen, um Ihre Nutzung der
                        Website auszuwerten, um Reports über die
                        Websiteaktivitäten zusammenzustellen und um weitere mit
                        der Websitenutzung und der Internetnutzung verbundene
                        Dienstleistungen gegenüber dem Websitebetreiber zu
                        erbringen. Die im Rahmen von Google Analytics von Ihrem
                        Browser übermittelte IP-Adresse wird nicht mit anderen
                        Daten von Google zusammengeführt.
                    </p>
                    <h3 className={scss.text}>Browser Plugin</h3>
                    <p className={scss.text}>
                        Sie können die Speicherung der Cookies durch eine
                        entsprechende Einstellung Ihrer Browser-Software
                        verhindern; wir weisen Sie jedoch darauf hin, dass Sie
                        in diesem Fall gegebenenfalls nicht sämtliche Funktionen
                        dieser Website vollumfänglich werden nutzen können. Sie
                        können darüber hinaus die Erfassung der durch den Cookie
                        erzeugten und auf Ihre Nutzung der Website bezogenen
                        Daten (inkl. Ihrer IP-Adresse) an Google sowie die
                        Verarbeitung dieser Daten durch Google verhindern, indem
                        Sie das unter dem folgenden Link verfügbare
                        Browser-Plugin herunterladen und installieren:
                        <Link
                            href="https://tools.google.com/dlpage/gaoptout?hl=de"
                            target="_blank"
                        >
                            https://tools.google.com/dlpage/gaoptout?hl=de
                        </Link>
                        .
                    </p>

                    <h3 className={scss.text}>
                        Widerspruch gegen Datenerfassung
                    </h3>
                    <p className={scss.text}>
                        Sie können die Erfassung Ihrer Daten durch Google
                        Analytics verhindern, indem Sie auf folgenden Link
                        klicken. Es wird ein Opt-Out-Cookie gesetzt, der die
                        Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
                        Website verhindert: Google Analytics deaktivieren.
                    </p>
                    <p className={scss.text}>
                        Mehr Informationen zum Umgang mit Nutzerdaten bei Google
                        Analytics finden Sie in der Datenschutzerklärung von
                        Google:
                        <Link
                            href="https://support.google.com/analytics/answer/6004245?hl=de"
                            target="_blank"
                        >
                            Datenschutzerklärung von Google
                        </Link>
                        .
                    </p>

                    <h3 className={scss.text}>Auftragsverarbeitung</h3>
                    <p className={scss.text}>
                        Wir haben mit Google einen Vertrag zur
                        Auftragsverarbeitung abgeschlossen und setzen die
                        strengen Vorgaben der deutschen Datenschutzbehörden bei
                        der Nutzung von Google Analytics vollständig um.
                    </p>

                    <h3 className={scss.text}>
                        Demografische Merkmale bei Google Analytics
                    </h3>
                    <p className={scss.text}>
                        Diese Website nutzt die Funktion „demografische
                        Merkmale“ von Google Analytics. Dadurch können Berichte
                        erstellt werden, die Aussagen zu Alter, Geschlecht und
                        Interessen der Seitenbesucher enthalten. Diese Daten
                        stammen aus interessenbezogener Werbung von Google sowie
                        aus Besucherdaten von Drittanbietern. Diese Daten können
                        keiner bestimmten Person zugeordnet werden. Sie können
                        diese Funktion jederzeit über die Anzeigeneinstellungen
                        in Ihrem Google-Konto deaktivieren oder die Erfassung
                        Ihrer Daten durch Google Analytics wie im Punkt
                        „Widerspruch gegen Datenerfassung“ dargestellt generell
                        untersagen.
                    </p>
                    <p className={scss.text}>
                        Sie können Ihren Browser so einstellen, dass Sie über
                        das Setzen von Cookies informiert werden und Cookies nur
                        im Einzelfall erlauben, die Annahme von Cookies für
                        bestimmte Fälle oder generell ausschließen sowie das
                        automatische Löschen der Cookies beim Schließen des
                        Browser aktivieren. Bei der Deaktivierung von Cookies
                        kann die Funktionalität unserer Website eingeschränkt
                        sein.
                    </p>
                    <p className={scss.text}>
                        Sie können der Erhebung und Nutzung Ihrer Daten für die
                        Zukunft widersprechen, indem Sie mit einem Klick auf
                        diesen Link einen Opt-Out-Cookie in Ihrem Browser
                        setzen:
                        <Link
                            href="https://www.quantcast.com/opt-out/"
                            target="_blank"
                        >
                            https://www.quantcast.com/opt-out/
                        </Link>
                        . Wenn Sie die Cookies auf Ihrem Rechner löschen, müssen
                        Sie den Opt-Out-Cookie erneut setzen.
                    </p>

                    <h2 className={scss.text}>Einsatz von EverCAPTCHA</h2>
                    <p className={scss.text}>
                        Zur Absicherung unseres Kontaktformulars gegen
                        unerwünschte Verwendung nutzen wir den Dienst
                        EverCAPTCHA unseres Website-Erstellers und Hosters
                        United Media AG, Hansaallee 299, 40549 Düsseldorf.
                        Dieser Dienst wird bereitgestellt durch den
                        Unterauftragsdatenverarbeiter: wwwe GmbH, Hansaallee
                        299, 40549 Düsseldorf. EverCAPTCHA ermöglicht die
                        Unterscheidung, ob die Eingabe der Daten in das
                        Kontaktformular tatsächlich durch einen Menschen oder
                        missbräuchlich automatisiert durch eine Maschine, einem
                        so genannten Spambot erfolgt.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Zu diesem Zweck werden bei Verwendung unserer Formulare
                        diverse Fragen gestellt (etwa: „Klicken Sie ein Symbol X
                        an“ etc.). EverCAPTCHA speichert hierbei alle
                        Fehlversuche eines Nutzers, eine IP-Adresse über eine
                        Session ID, die im LocalStorage gespeichert wird. Die
                        Session ID wird per JavaScript bei jeder Anfrage an den
                        Server übermittelt. Erfolgen 30 Fehleingaben, wird die
                        IP-Adresse des Nutzers dauerhaft in einer Datenbank zur
                        Spamabwehr gespeichert. Im Übrigen erfolgt eine Löschung
                        der IP-Adressen binnen 7 Tagen.
                    </p>
                    <p className={clsx(scss.text, scss.margin)}>
                        Bereitstellung des Onlineangebotes und Webhosting Wir
                        verarbeiten die Daten der Nutzer, um ihnen unsere
                        Online-Dienste zur Verfügung stellen zu können. Zu
                        diesem Zweck verarbeiten wir die IP-Adresse des Nutzers,
                        die notwendig ist, um die Inhalte und Funktionen unserer
                        Online-Dienste an den Browser oder das Endgerät der
                        Nutzer zu übermitteln.
                    </p>
                    <ul className={scss.list}>
                        <li className={scss.item}>
                            Verarbeitete Datenarten: Nutzungsdaten (z.B.
                            besuchte Webseiten, Interesse an Inhalten,
                            Zugriffszeiten); Meta-, Kommunikations- und
                            Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                            Identifikationsnummern, Einwilligungsstatus);
                            Inhaltsdaten (z.B. Eingaben in Onlineformularen).
                        </li>
                        <li className={scss.item}>
                            Betroffene Personen: Nutzer (z.B. Webseitenbesucher,
                            Nutzer von Onlinediensten).
                        </li>
                        <li className={scss.item}>
                            Nutzerfreundlichkeit; Informationstechnische
                            Infrastruktur (Betrieb und Bereitstellung von
                            Informationssystemen und technischen Geräten
                            (Computer, Server etc.).);
                            Sicherheitsmaßnahmen.Zwecke der Verarbeitung:
                            Bereitstellung unseres Onlineangebotes und
                        </li>
                        <li className={scss.item}>
                            Rechtsgrundlagen: Berechtigte Interessen (Art. 6
                            Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                        <li className={scss.item}>
                            Weitere Hinweise zu Verarbeitungsprozessen,
                            Verfahren und Diensten:
                        </li>
                        <li className={scss.item}>
                            Erhebung von Zugriffsdaten und Logfiles: Der Zugriff
                            auf unser Onlineangebot wird in Form von so
                            genannten "Server-Logfiles" protokolliert. Zu den
                            Serverlogfiles können die Adresse und Name der
                            abgerufenen Webseiten und Dateien, Datum und Uhrzeit
                            des Abrufs, übertragene Datenmengen, Meldung über
                            erfolgreichen Abruf, Browsertyp nebst Version, das
                            Betriebssystem des Nutzers, Referrer URL (die zuvor
                            besuchte Seite) und im Regelfall IP-Adressen und der
                            anfragende Provider gehören. Die Serverlogfiles
                            können zum einen zu Zwecken der Sicherheit
                            eingesetzt werden, z.B., um eine Überlastung der
                            Server zu vermeiden (insbesondere im Fall von
                            missbräuchlichen Angriffen, sogenannten
                            DDoS-Attacken) und zum anderen, um die Auslastung
                            der Server und ihre Stabilität sicherzustellen;
                            Rechtsgrundlagen: Berechtigte Interessen (Art. 6
                            Abs. 1 S. 1 lit. f) DSGVO); Löschung von Daten:
                            Logfile-Informationen werden für die Dauer von
                            maximal 30 Tagen gespeichert und danach gelöscht
                            oder anonymisiert. Daten, deren weitere Aufbewahrung
                            zu Beweiszwecken erforderlich ist, sind bis zur
                            endgültigen Klärung des jeweiligen Vorfalls von der
                            Löschung ausgenommen.
                        </li>
                        <li className={scss.item}>
                            Hosting und Software: Erstellung, Bereitstellung und
                            Betrieb von Websites, Blogs und anderen
                            Onlineangeboten; Dienstanbieter: Wix.com Ltd., Nemal
                            St. 40, 6350671 Tel Aviv, Israel; Rechtsgrundlagen:
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                            DSGVO); Website:{' '}
                            <Link href="https://de.wix.com/" target="_blank">
                                https://de.wix.com/
                            </Link>
                            ; Datenschutzerklärung:{' '}
                            <Link
                                href="https://de.wix.com/about/privacy"
                                target="_blank"
                            >
                                https://de.wix.com/about/privacy
                            </Link>
                            ; Auftragsverarbeitungsvertrag:{' '}
                            <Link
                                href="https://www.wix.com/about/privacy-dpa-users"
                                target="_blank"
                            >
                                https://www.wix.com/about/privacy-dpa-users
                            </Link>
                            ; Weitere Informationen: Im Rahmen der vorgenannten
                            Leistungen von Wix können Daten auch an die Wix
                            Inc., 500 Terry A. Francois Boulevard, San
                            Francisco, California 94158, USA, auf der Grundlage
                            von Standardvertragsklauseln oder einer
                            gleichwertigen Datenschutzgarantie im Rahmen der
                            Weiterverarbeitung im Auftrag von Wix übermittelt
                            werden.
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Policy;
