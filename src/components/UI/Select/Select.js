import React from 'react';
import Classes from './Select.css'
const Select = ()=>{
    return(
    <div class="form-group">
    <label>Location</label>
    <select className={Classes.SelectElement} name="location" id="location">
        <option value="">Select your Location</option>
        <option value="Gachibowli">Gachibowli</option>
        <option value="Shamshabad">Shamshabad</option>
        <option value="Kukatpally">Kukatpally</option>
        <option value="Mallapur">Mallapur</option>
        <option value="Hi Tech City">Hi Tech City</option>
        <option value="Habsiguda">Habsiguda</option>
        <option value="Jubilee Hills">Jubilee Hills</option>
        <option value="Secunderabad">Secunderabad</option>
        <option value="Banjara Hills">Banjara Hills</option>
        <option value="Manikonda">Manikonda</option>
        <option value="Uppal Kalan">Uppal Kalan</option>
        <option value="Ameerpet">Ameerpet</option>
        <option value="Shamirpet">Shamirpet</option>
        <option value="Sainikpuri">Sainikpuri</option>
        <option value="Srinagar Colony">Srinagar Colony</option>
        <option value="Quthbullapur">Quthbullapur</option>
        <option value="A C Guards">A C Guards</option>
        <option value="A S Roa Nagar">A S Roa Nagar</option>
        <option value="Abids Road">Abids Road</option>
        <option value="Adarsh Nagar">Adarsh Nagar</option>
        <option value="Adikmet">Adikmet</option>
        <option value="Afzalgunj">Afzalgunj</option>
        <option value="Agapura">Agapura</option>
        <option value="Ahmed Nagar">Ahmed Nagar</option>
        <option value="Akbar Road">Akbar Road</option>
        <option value="Alexander Road">Alexander Road</option>
        <option value="Aliabad">Aliabad</option>
        <option value="Alwal">Alwal</option>
        <option value="Amberpet">Amberpet</option>
        <option value="Ameerpet X Road">Ameerpet X Road</option>
        <option value="Anand Bagh">Anand Bagh</option>
        <option value="Anand Nagar Colony">Anand Nagar Colony</option>
        <option value="Ashok Nagar">Ashok Nagar</option>
        <option value="Asif Nagar">Asif Nagar</option>
        <option value="Attapur">Attapur</option>
        <option value="Attapur Ring Road">Attapur Ring Road</option>
        <option value="Auto Nagar">Auto Nagar</option>
        <option value="Azamabad">Azamabad</option>
        <option value="Azampura Masjid">Azampura Masjid</option>
        <option value="Baber Bagh">Baber Bagh</option>
        <option value="Bachpally">Bachpally</option>
        <option value="Badichowdi">Badichowdi</option>
        <option value="Bagh Amberpet">Bagh Amberpet</option>
        <option value="Bagh Lingampally">Bagh Lingampally</option>
        <option value="Bahadurpura">Bahadurpura</option>
        <option value="Bahadurpurpally">Bahadurpurpally</option>
        <option value="Bairamalguda">Bairamalguda</option>
        <option value="Bakaram">Bakaram</option>
        <option value="Bala Nagar">Bala Nagar</option>
        <option value="Balapur">Balapur</option>
        <option value="Balkampet">Balkampet</option>
        <option value="Bandimet">Bandimet</option>
        <option value="Bandlaguda">Bandlaguda</option>
        <option value="Bank Street">Bank Street</option>
        <option value="Bansilal Pet">Bansilal Pet</option>
        <option value="Bansilalpet">Bansilalpet</option>
        <option value="Bapuji Nagar">Bapuji Nagar</option>
        <option value="Barkas">Barkas</option>
        <option value="Barkatpura">Barkatpura</option>
        <option value="Basheerbagh">Basheerbagh</option>
        <option value="Bazarghat">Bazarghat</option>
        <option value="Begum Bazar">Begum Bazar</option>
        <option value="Bhagya Nagar Colony">Bhagya Nagar Colony</option>
        <option value="Bharat Nagar">Bharat Nagar</option>
        <option value="Bhel">Bhel</option>
        <option value="Bholakpur">Bholakpur</option>
        <option value="Bk Guda">Bk Guda</option>
        <option value="Bod Uppal">Bod Uppal</option>
        <option value="Boggulakunta">Boggulakunta</option>
        <option value="Bolaram">Bolaram</option>
        <option value="Borabanda">Borabanda</option>
        <option value="Boudha Nagar">Boudha Nagar</option>
        <option value="Bowenpally">Bowenpally</option>
        <option value="Boyiguda">Boyiguda</option>
        <option value="Chaderghat">Chaderghat</option>
        <option value="Chaitanyapuri">Chaitanyapuri</option>
        <option value="Champapet">Champapet</option>
        <option value="Champapet X Road">Champapet X Road</option>
        <option value="Chanchalguda">Chanchalguda</option>
        <option value="Chanda Nagar">Chanda Nagar</option>
        <option value="Chandrayanagutta">Chandrayanagutta</option>
        <option value="Chandrayangutta">Chandrayangutta</option>
        <option value="Chappel Bazar">Chappel Bazar</option>
        <option value="Chappel Road">Chappel Road</option>
        <option value="Char Kaman">Char Kaman</option>
        <option value="Charkaman">Charkaman</option>
        <option value="Charlapally">Charlapally</option>
        <option value="Charminar">Charminar</option>
        <option value="Chatta Bazar">Chatta Bazar</option>
        <option value="Cherlapally">Cherlapally</option>
        <option value="Chikkadpally">Chikkadpally</option>
        <option value="Chilkalguda">Chilkalguda</option>
        <option value="Chintal">Chintal</option>
        <option value="Chintal Basti">Chintal Basti</option>
        <option value="Chintalkunta">Chintalkunta</option>
        <option value="Chirag Ali Lane">Chirag Ali Lane</option>
        <option value="Chudi Bazar">Chudi Bazar</option>
        <option value="D D Colony">D D Colony</option>
        <option value="Dabeerpura">Dabeerpura</option>
        <option value="Dabeerpura North">Dabeerpura North</option>
        <option value="Dar Ul Salam">Dar Ul Salam</option>
        <option value="Darul Shifa">Darul Shifa</option>
        <option value="Defence Colony">Defence Colony</option>
        <option value="Devan Devdi">Devan Devdi</option>
        <option value="Dhan Bazar">Dhan Bazar</option>
        <option value="Dharam Karan Road">Dharam Karan Road</option>
        <option value="Diamond Point">Diamond Point</option>
        <option value="Dilshad Nagar">Dilshad Nagar</option>
        <option value="Dilsukhnagar Main Road">Dilsukhnagar Main Road</option>
        <option value="Distillery Road">Distillery Road</option>
        <option value="Domalguda">Domalguda</option>
        <option value="Doodh Bowli">Doodh Bowli</option>
        <option value="Dr. A.S Rao Nagar">Dr. A.S Rao Nagar</option>
        <option value="Dwarkapuri Colony">Dwarkapuri Colony</option>
        <option value="East Anand Bagh">East Anand Bagh</option>
        <option value="East Marredpally">East Marredpally</option>
        <option value="ECIL">ECIL</option>
        <option value="Ecil Post">Ecil Post</option>
        <option value="Ecil X Roads">Ecil X Roads</option>
        <option value="Edi Bazar North">Edi Bazar North</option>
        <option value="Erragadda">Erragadda</option>
        <option value="Erramanzil">Erramanzil</option>
        <option value="Erramanzil Colony">Erramanzil Colony</option>
        <option value="Esamia Bazar">Esamia Bazar</option>
        <option value="Falaknuma">Falaknuma</option>
        <option value="Fateh Darwaza">Fateh Darwaza</option>
        <option value="Fateh Maidan">Fateh Maidan</option>
        <option value="Fateh Nagar">Fateh Nagar</option>
        <option value="Feel Khana">Feel Khana</option>
        <option value="Feroz Guda">Feroz Guda</option>
        <option value="Film Nagar">Film Nagar</option>
        <option value="Gaddi Annaram">Gaddi Annaram</option>
        <option value="Gaddi Annaram X Roads">Gaddi Annaram X Roads</option>
        <option value="Gagan Mahal">Gagan Mahal</option>
        <option value="Gagan Pahad">Gagan Pahad</option>
        <option value="Gandhi Nagar">Gandhi Nagar</option>
        <option value="Gandhipet">Gandhipet</option>
        <option value="Gandhipet Road">Gandhipet Road</option>
        <option value="General Bazar">General Bazar</option>
        <option value="Ghansi Bazar">Ghansi Bazar</option>
        <option value="Ghasmandi">Ghasmandi</option>
        <option value="Ghatkesar">Ghatkesar</option>
        <option value="Golconda">Golconda</option>
        <option value="Golconda X Roads">Golconda X Roads</option>
        <option value="Gosha Mahal">Gosha Mahal</option>
        <option value="Gowliguda">Gowliguda</option>
        <option value="Gowliguda Chaman">Gowliguda Chaman</option>
        <option value="Green Lands">Green Lands</option>
        <option value="Green Park Extension">Green Park Extension</option>
        <option value="Gudimalkapur">Gudimalkapur</option>
        <option value="Gudimalkapur New Po">Gudimalkapur New Po</option>
        <option value="Gulzar House">Gulzar House</option>
        <option value="Gun Foundry">Gun Foundry</option>
        <option value="Gun Rock">Gun Rock</option>
        <option value="Gunfoundry">Gunfoundry</option>
        <option value="Hafiz Pet">Hafiz Pet</option>
        <option value="Hakimpet">Hakimpet</option>
        <option value="Hanuman Tekdi">Hanuman Tekdi</option>
        <option value="Haribowli">Haribowli</option>
        <option value="Hasmatpet">Hasmatpet</option>
        <option value="Hastinapuram">Hastinapuram</option>
        <option value="Hayat Nagar">Hayat Nagar</option>
        <option value="Hill Fort">Hill Fort</option>
        <option value="Hill Fort Road">Hill Fort Road</option>
        <option value="Hill Street">Hill Street</option>
        <option value="Himayat Nagar">Himayat Nagar</option>
        <option value="Himayat Nagar X Roads">Himayat Nagar X Roads</option>
        <option value="Himayat Sagar">Himayat Sagar</option>
        <option value="Hmt Nagar">Hmt Nagar</option>
        <option value="Hmt Road">Hmt Road</option>
        <option value="Humayun Nagar">Humayun Nagar</option>
        <option value="Hussaini Alam">Hussaini Alam</option>
        <option value="Hyder Basti">Hyder Basti</option>
        <option value="Hyder Nagar">Hyder Nagar</option>
        <option value="Hyderabad Central">Hyderabad Central</option>
        <option value="Hyderguda">Hyderguda</option>
        <option value="Ibrahim Bagh">Ibrahim Bagh</option>
        <option value="Ibrahimpatnam">Ibrahimpatnam</option>
        <option value="Inderbagh">Inderbagh</option>
        <option value="Indira Park">Indira Park</option>
        <option value="Jagadgirigutta">Jagadgirigutta</option>
        <option value="Jagdish Market">Jagdish Market</option>
        <option value="Jahanuma">Jahanuma</option>
        <option value="Jambagh">Jambagh</option>
        <option value="Jamia Osmania">Jamia Osmania</option>
        <option value="Jawahar Nagar">Jawahar Nagar</option>
        <option value="Jawaharlal Nehru Road">Jawaharlal Nehru Road</option>
        <option value="Jeedimetla">Jeedimetla</option>
        <option value="Kachi">Kachi</option>
        <option value="Kachiguda">Kachiguda</option>
        <option value="Kachiguda X Road">Kachiguda X Road</option>
        <option value="Kakaguda">Kakaguda</option>
        <option value="Kakatiya Nagar">Kakatiya Nagar</option>
        <option value="Kalasiguda">Kalasiguda</option>
        <option value="Kali Kabar">Kali Kabar</option>
        <option value="Kali Kaman">Kali Kaman</option>
        <option value="Kalyan Nagar">Kalyan Nagar</option>
        <option value="Kamala Nagar">Kamala Nagar</option>
        <option value="Kamala Puri Colony">Kamala Puri Colony</option>
        <option value="Kamla Nagar">Kamla Nagar</option>
        <option value="Kanchanbagh">Kanchanbagh</option>
        <option value="Kandoji Bazar">Kandoji Bazar</option>
        <option value="Kapra">Kapra</option>
        <option value="Karimnagar">Karimnagar</option>
        <option value="Karkhana">Karkhana</option>
        <option value="Karman Ghat">Karman Ghat</option>
        <option value="Karmanghat">Karmanghat</option>
        <option value="Karmanghat X Roads">Karmanghat X Roads</option>
        <option value="Karvan">Karvan</option>
        <option value="Karwan">Karwan</option>
        <option value="Kavadiguda">Kavadiguda</option>
        <option value="Keshavagiri">Keshavagiri</option>
        <option value="Khairatabad">Khairatabad</option>
        <option value="Kharkhana Main Road">Kharkhana Main Road</option>
        <option value="King Koti">King Koti</option>
        <option value="King Koti X Road">King Koti X Road</option>
        <option value="Kishan Bagh">Kishan Bagh</option>
        <option value="Kishangunj">Kishangunj</option>
        <option value="Kompally">Kompally</option>
        <option value="Kondapur">Kondapur</option>
        <option value="Kothaguda">Kothaguda</option>
        <option value="Kothapet">Kothapet</option>
        <option value="Kphb">Kphb</option>
        <option value="Kphb Colony">Kphb Colony</option>
        <option value="Krishna Nagar">Krishna Nagar</option>
        <option value="Kukatpally Colony">Kukatpally Colony</option>
        <option value="Kummarguda">Kummarguda</option>
        <option value="Kundan Bagh">Kundan Bagh</option>
        <option value="Kushaiguda">Kushaiguda</option>
        <option value="Kattedan">Kattedan</option>
        <option value="Kavadi Guda">Kavadi Guda</option>
        <option value="L B Nagar">L B Nagar</option>
        <option value="L B Stadium">L B Stadium</option>
        <option value="L B Stadium">L B Stadium</option>
        <option value="Lad Bazar">Lad Bazar</option>
        <option value="Lakdi Ka Pul">Lakdi Ka Pul</option>
        <option value="Lal Bazar">Lal Bazar</option>
        <option value="Lal Darwaza">Lal Darwaza</option>
        <option value="Lalapet">Lalapet</option>
        <option value="Lallaguda">Lallaguda</option>
        <option value="Langer House">Langer House</option>
        <option value="Liberty">Liberty</option>
        <option value="Lingampalli">Lingampalli</option>
        <option value="Lingampally">Lingampally</option>
        <option value="Lothukunta">Lothukunta</option>
        <option value="Lower Tank Bund Road">Lower Tank Bund Road</option>
        <option value="M G Road">M G Road</option>
        <option value="Machili Kaman">Machili Kaman</option>
        <option value="Madannapet">Madannapet</option>
        <option value="Madhapur">Madhapur</option>
        <option value="Madhura Nagar">Madhura Nagar</option>
        <option value="Madina">Madina</option>
        <option value="Madina Guda">Madina Guda</option>
        <option value="Mahankali Street">Mahankali Street</option>
        <option value="Maharaj Gunj">Maharaj Gunj</option>
        <option value="Mahatma Gandhi Road">Mahatma Gandhi Road</option>
        <option value="Mahendra Hills">Mahendra Hills</option>
        <option value="Malakpet">Malakpet</option>
        <option value="Malakpet Extension">Malakpet Extension</option>
        <option value="Malkajgiri">Malkajgiri</option>
        <option value="Mallapur">Mallapur</option>
        <option value="Mallapuram">Mallapuram</option>
        <option value="Mallepally">Mallepally</option>
        <option value="Mallepally North">Mallepally North</option>
        <option value="Mangal Hat">Mangal Hat</option>
        <option value="Mansurabad X Road">Mansurabad X Road</option>
        <option value="Market Street">Market Street</option>
        <option value="Marredpally">Marredpally</option>
        <option value="Maruthi Colony">Maruthi Colony</option>
        <option value="Maruthi Nagar">Maruthi Nagar</option>
        <option value="Masab Tank">Masab Tank</option>
        <option value="Medchal">Medchal</option>
        <option value="Meerpet">Meerpet</option>
        <option value="Mehboob Gunj">Mehboob Gunj</option>
        <option value="Mehboob Nagar">Mehboob Nagar</option>
        <option value="Mehdipatnam X Road">Mehdipatnam X Road</option>
        <option value="Mettu Guda">Mettu Guda</option>
        <option value="Minister Road">Minister Road</option>
        <option value="Miralam Mandi">Miralam Mandi</option>
        <option value="Miyapur">Miyapur</option>
        <option value="Mogulpura">Mogulpura</option>
        <option value="Moinabad">Moinabad</option>
        <option value="Monda Market">Monda Market</option>
        <option value="Moosabowli">Moosabowli</option>
        <option value="Moosapet">Moosapet</option>
        <option value="Moosaram Bagh">Moosaram Bagh</option>
        <option value="Moosaram Bagh X Road">Moosaram Bagh X Road</option>
        <option value="Moti Nagar">Moti Nagar</option>
        <option value="Moula Ali">Moula Ali</option>
        <option value="Mozamjahi Market">Mozamjahi Market</option>
        <option value="Mughalpura">Mughalpura</option>
        <option value="Muktargunj">Muktargunj</option>
        <option value="Murad Nagar">Murad Nagar</option>
        <option value="Musheerabad">Musheerabad</option>
        <option value="Mylargadda">Mylargadda</option>
        <option value="Nacharam">Nacharam</option>
        <option value="Nagarjuna Hills">Nagarjuna Hills</option>
        <option value="Nagarjuna Nagar">Nagarjuna Nagar</option>
        <option value="Nagarjuna Sagar Road">Nagarjuna Sagar Road</option>
        <option value="Nagole">Nagole</option>
        <option value="Nagole X Road">Nagole X Road</option>
        <option value="Nallagutta">Nallagutta</option>
        <option value="Nallakunta">Nallakunta</option>
        <option value="Namala Gundu">Namala Gundu</option>
        <option value="Nampally">Nampally</option>
        <option value="Nampally Station Road">Nampally Station Road</option>
        <option value="Narayanaguda">Narayanaguda</option>
        <option value="Narayanguda">Narayanguda</option>
        <option value="Nayapul">Nayapul</option>
        <option value="Necklace Road">Necklace Road</option>
        <option value="Nehru Nagar">Nehru Nagar</option>
        <option value="Neredmet">Neredmet</option>
        <option value="Neredmet Cross Road">Neredmet Cross Road</option>
        <option value="New Bowenpally">New Bowenpally</option>
        <option value="New Boyiguda">New Boyiguda</option>
        <option value="New Malakpet">New Malakpet</option>
        <option value="New Nagole">New Nagole</option>
        <option value="New Nallakunta">New Nallakunta</option>
        <option value="New Nallakunta X Road">New Nallakunta X Road</option>
        <option value="New Osmangunj">New Osmangunj</option>
        <option value="Nimboliadda">Nimboliadda</option>
        <option value="Nizam Shahi Road">Nizam Shahi Road</option>
        <option value="Nizamabad">Nizamabad</option>
        <option value="Nizampet">Nizampet</option>
        <option value="Nizampet Road">Nizampet Road</option>
        <option value="Noor Khan Bazar">Noor Khan Bazar</option>
        <option value="Old Alwal">Old Alwal</option>
        <option value="Old Bowenpally">Old Bowenpally</option>
        <option value="Old Boyiguda">Old Boyiguda</option>
        <option value="Old Ghasmandi">Old Ghasmandi</option>
        <option value="Old Jail Street">Old Jail Street</option>
        <option value="Old Malakpet">Old Malakpet</option>
        <option value="Old Topkhana">Old Topkhana</option>
        <option value="Osman Shahi">Osman Shahi</option>
        <option value="Osmangunj">Osmangunj</option>
        <option value="Osmania University">Osmania University</option>
        <option value="Padma Rao Nagar">Padma Rao Nagar</option>
        <option value="Palika Bazar">Palika Bazar</option>
        <option value="Pan Bazar">Pan Bazar</option>
        <option value="Panjagutta">Panjagutta</option>
        <option value="P And T Colony">P And T Colony</option>
        <option value="Paradise">Paradise</option>
        <option value="Paradise Circle">Paradise Circle</option>
        <option value="Parklane">Parklane</option>
        <option value="Parsigutta">Parsigutta</option>
        <option value="Patancheru">Patancheru</option>
        <option value="Patel Market">Patel Market</option>
        <option value="Pathargatti">Pathargatti</option>
        <option value="Patny">Patny</option>
        <option value="Penderghast Road">Penderghast Road</option>
        <option value="Picket">Picket</option>
        <option value="Pot Market">Pot Market</option>
        <option value="Pragathi Nagar">Pragathi Nagar</option>
        <option value="Prakash Nagar">Prakash Nagar</option>
        <option value="Prasanth Nagar">Prasanth Nagar</option>
        <option value="Purana Pul">Purana Pul</option>
        <option value="Purani Haveli">Purani Haveli</option>
        <option value="Putli Bowli">Putli Bowli</option>
        <option value="R R District">R R District</option>
        <option value="Raj Bhavan Road">Raj Bhavan Road</option>
        <option value="Rajendra Nagar">Rajendra Nagar</option>
        <option value="Ram Nagar">Ram Nagar</option>
        <option value="Ram Nagar X Road">Ram Nagar X Road</option>
        <option value="Ramachandra Puram">Ramachandra Puram</option>
        <option value="Ramakrishna Puram">Ramakrishna Puram</option>
        <option value="Ramakrishna Puram Road">Ramakrishna Puram Road</option>
        <option value="Ramanthapur">Ramanthapur</option>
        <option value="Ramgopalpet">Ramgopalpet</option>
        <option value="Ramkote">Ramkote</option>
        <option value="Ramnagar Gundu">Ramnagar Gundu</option>
        <option value="Ranga Reddy Nagar">Ranga Reddy Nagar</option>
        <option value="Ranigunj">Ranigunj</option>
        <option value="Rashtrapathi Road">Rashtrapathi Road</option>
        <option value="Rasoolpura">Rasoolpura</option>
        <option value="Red Hills">Red Hills</option>
        <option value="Regimental Bazar">Regimental Bazar</option>
        <option value="Rethi Bowli">Rethi Bowli</option>
        <option value="Rikabgunj">Rikabgunj</option>
        <option value="Risala Bazar">Risala Bazar</option>
        <option value="Rtc Colony">Rtc Colony</option>
        <option value="RTC X Road">RTC X Road</option>
        <option value="S D Road">S D Road</option>
        <option value="S P Road">S P Road</option>
        <option value="S R Colony">S R Colony</option>
        <option value="S R Nagar">S R Nagar</option>
        <option value="Safilguda">Safilguda</option>
        <option value="Sagar Road">Sagar Road</option>
        <option value="Sai Nagar">Sai Nagar</option>
        <option value="Saidabad">Saidabad</option>
        <option value="Saifabad">Saifabad</option>
        <option value="Saleem Nagar">Saleem Nagar</option>
        <option value="Sanath Nagar">Sanath Nagar</option>
        <option value="Santosh Nagar">Santosh Nagar</option>
        <option value="Saroor Nagar">Saroor Nagar</option>
        <option value="Sebastian Road">Sebastian Road</option>
        <option value="Secretariat">Secretariat</option>
        <option value="Seetharambagh">Seetharambagh</option>
        <option value="Serilingampally">Serilingampally</option>
        <option value="Shah Ali Banda">Shah Ali Banda</option>
        <option value="Shahpur Nagar">Shahpur Nagar</option>
        <option value="Shaikpet">Shaikpet</option>
        <option value="Shahpur Nagar">Shahpur Nagar</option>
        <option value="Shamshergunj">Shamshergunj</option>
        <option value="Shanker Bagh">Shanker Bagh</option>
        <option value="Shanker Mutt">Shanker Mutt</option>
        <option value="Shanti Nagar">Shanti Nagar</option>
        <option value="Shivam Road">Shivam Road</option>
        <option value="Shivarampally">Shivarampally</option>
        <option value="Siddarth Nagar">Siddarth Nagar</option>
        <option value="Siddiamber Bazar">Siddiamber Bazar</option>
        <option value="Sikh Road">Sikh Road</option>
        <option value="Sikh Village">Sikh Village</option>
        <option value="Sikh Village Road">Sikh Village Road</option>
        <option value="Sindhi Colony">Sindhi Colony</option>
        <option value="Sitaphal Mandi">Sitaphal Mandi</option>
        <option value="Somajiguda">Somajiguda</option>
        <option value="Somajiguda Circle">Somajiguda Circle</option>
        <option value="Sri Krishna Nagar">Sri Krishna Nagar</option>
        <option value="Sri Srinivas Colony">Sri Srinivas Colony</option>
        <option value="Srinagar">Srinagar</option>
        <option value="Srinagar Colony Main Road">Srinagar Colony Main Road</option>
        <option value="Srinivasa Colony">Srinivasa Colony</option>
        <option value="Srinivasa Nagar">Srinivasa Nagar</option>
        <option value="Srinivasa Nagar Colony">Srinivasa Nagar Colony</option>
        <option value="St. Johns Road">St. Johns Road</option>
        <option value="St. Marys Road">St. Marys Road</option>
        <option value="Subash Road">Subash Road</option>
        <option value="Sultan Bazar">Sultan Bazar</option>
        <option value="Surya Nagar Colony">Surya Nagar Colony</option>
        <option value="Shapur Nagar">Shapur Nagar</option>
        <option value="Shivaji Nagar">Shivaji Nagar</option>
        <option value="Tad Bund">Tad Bund</option>
        <option value="Tad Bund X Road">Tad Bund X Road</option>
        <option value="Talab Katta">Talab Katta</option>
        <option value="Talabkatta">Talabkatta</option>
        <option value="Tank Bund">Tank Bund</option>
        <option value="Tank Bund Road">Tank Bund Road</option>
        <option value="Tar Bund">Tar Bund</option>
        <option value="Tar Bund X Road">Tar Bund X Road</option>
        <option value="Taranagar">Taranagar</option>
        <option value="Tarnaka">Tarnaka</option>
        <option value="Tilak Nagar">Tilak Nagar</option>
        <option value="Tilak Road">Tilak Road</option>
        <option value="Tobacco Bazar">Tobacco Bazar</option>
        <option value="Toli Chowki">Toli Chowki</option>
        <option value="Topkhana">Topkhana</option>
        <option value="Trimulgherry">Trimulgherry</option>
        <option value="Trimulgherry X Road">Trimulgherry X Road</option>
        <option value="Troop Bazar">Troop Bazar</option>
        <option value="Uppal">Uppal</option>
        <option value="Uppuguda">Uppuguda</option>
        <option value="Vanasthalipuram">Vanasthalipuram</option>
        <option value="Vasavi Nagar">Vasavi Nagar</option>
        <option value="Vengal Rao Nagar">Vengal Rao Nagar</option>
        <option value="Venkatapuram">Venkatapuram</option>
        <option value="Vidyanagar">Vidyanagar</option>
        <option value="Vijay Nagar Colony">Vijay Nagar Colony</option>
        <option value="Vikas Nagar">Vikas Nagar</option>
        <option value="Vikrampuri">Vikrampuri</option>
        <option value="Vikrampuri Colony">Vikrampuri Colony</option>
        <option value="Vinayak Rao Nagar">Vinayak Rao Nagar</option>
        <option value="Vithalwadi">Vithalwadi</option>
        <option value="Warasiguda">Warasiguda</option>
        <option value="West Marredpally">West Marredpally</option>
        <option value="Yakutpura">Yakutpura</option>
        <option value="Yapral">Yapral</option>
        <option value="Yellareddy Guda">Yellareddy Guda</option>
        <option value="Yellareddyguda">Yellareddyguda</option>
        <option value="Yousuf Bazar">Yousuf Bazar</option>
        <option value="Yousufguda">Yousufguda</option>
        <option value="Zamistanpur">Zamistanpur</option>
        <option value="Tirumalgherry">Tirumalgherry</option>
        <option value="Hyderabad Airport 1">Hyderabad Airport 1</option>
        <option value="Hyder Shah Kote">Hyder Shah Kote</option>
        <option value="Hyderabad GPO">Hyderabad GPO</option>
        <option value="Hyderabad Jubilee HO">Hyderabad Jubilee HO</option>
        <option value="Hyderabad Public School">Hyderabad Public School</option>
        <option value="I.E.Nacharam">I.E.Nacharam</option>
        <option value="I.M.Colony">I.M.Colony</option>
        <option value="Ibrahim Bagh Lines">Ibrahim Bagh Lines</option>
        <option value="Ie Moulali">Ie Moulali</option>
        <option value="IICT">IICT</option>
        <option value="Jaggamguda">Jaggamguda</option>
        <option value="Jama I Osmania">Jama I Osmania</option>
        <option value="Jillellaguda">Jillellaguda</option>
        <option value="Karwan Sahu">Karwan Sahu</option>
        <option value="Kachivani Singaram">Kachivani Singaram</option>
        <option value="Kattedan Ie So">Kattedan Ie So</option>
        <option value="Keesara">Keesara</option>
        <option value="Keesaragutta">Keesaragutta</option>
        <option value="Keshogiri SO">Keshogiri SO</option>
        <option value="Khairatabad HO">Khairatabad HO</option>
        <option value="Kingsway">Kingsway</option>
        <option value="Kismatpur">Kismatpur</option>
        <option value="Kolthur">Kolthur</option>
        <option value="Korremal">Korremal</option>
        <option value="Kulsumpura">Kulsumpura</option>
        <option value="Kyasaram">Kyasaram</option>
        <option value="Lalgadi Malakpet">Lalgadi Malakpet</option>
        <option value="Mehdipatnam">Mehdipatnam</option>
        <option value="Old City">Old City</option>
        <option value="Pratap Singaram">Pratap Singaram</option>
        <option value="Qazipura">Qazipura</option>
        <option value="RC Imarat So">RC Imarat So</option>
        <option value="Rahmath Nagar">Rahmath Nagar</option>
        <option value="Rail Nilayam">Rail Nilayam</option>
        <option value="Raj Bhavan">Raj Bhavan</option>
        <option value="Rajbolaram">Rajbolaram</option>
        <option value="Ag College">Ag College</option>
        <option value="AG Office">AG Office</option>
        <option value="A.Gs Staff Quarters">A.Gs Staff Quarters</option>
        <option value="Amber Nagar">Amber Nagar</option>
        <option value="Anand Nagar">Anand Nagar</option>
        <option value="Ananthagiri">Ananthagiri</option>
        <option value="Andhra Mahila Sabha">Andhra Mahila Sabha</option>
        <option value="Aperl">Aperl</option>
        <option value="APHB Colony Moulali">APHB Colony Moulali</option>
        <option value="Atvelli">Atvelli</option>
        <option value="Badangpet">Badangpet</option>
        <option value="Begumpet">Begumpet</option>
        <option value="Begumpet Police Lines">Begumpet Police Lines</option>
        <option value="Bharath Nagar Colony">Bharath Nagar Colony</option>
        <option value="Boduppal">Boduppal</option>
        <option value="Bogaram">Bogaram</option>
        <option value="Central Police Lines">Central Police Lines</option>
        <option value="Chanchalguda Colony">Chanchalguda Colony</option>
        <option value="Chandulal Baradari">Chandulal Baradari</option>
        <option value="CRP Camp">CRP Camp</option>
        <option value="Cyberabad">Cyberabad</option>
        <option value="Dargah Hussain Shah Wali">Dargah Hussain Shah Wali</option>
        <option value="Darushifa">Darushifa</option>
        <option value="Dattatreya Colony">Dattatreya Colony</option>
        <option value="Dhoolpet">Dhoolpet</option>
        <option value="Fathenagar Colony">Fathenagar Colony</option>
        <option value="Gajularamaram">Gajularamaram</option>
        <option value="Gandhi Bhavan">Gandhi Bhavan</option>
        <option value="Girmapur">Girmapur</option>
        <option value="Golconda Chowrastha">Golconda Chowrastha</option>
        <option value="Yadgarpally">Yadgarpally</option>
        <option value="Vidhan Sabha">Vidhan Sabha</option>
        <option value="Vishali Nagar">Vishali Nagar</option>
        <option value="Vaidehi Nagar">Vaidehi Nagar</option>
        <option value="Thumkunta">Thumkunta</option>
        <option value="Thimmaipally">Thimmaipally</option>
        <option value="Swaraj Nagar">Swaraj Nagar</option>
        <option value="Sardar Vallabhbhai Patel National Police Academy">Sardar Vallabhbhai Patel National Police Academy</option>
        <option value="Survey Of India">Survey Of India</option>
        <option value="Suraram">Suraram</option>
        <option value="Sultan Shahi">Sultan Shahi</option>
        <option value="Kachiguda Station">Kachiguda Station</option>
        <option value="State Bank Of Hyderabad">State Bank Of Hyderabad</option>
        <option value="Sripuram Colony">Sripuram Colony</option>
        <option value="Srinivasapuram">Srinivasapuram</option>
        <option value="South Banjara Hills">South Banjara Hills</option>
        <option value="Snehapuri Colony">Snehapuri Colony</option>
        <option value="Sitaphalmandi">Sitaphalmandi</option>
        <option value="Shyam Nagar">Shyam Nagar</option>
        <option value="Turkapalliyadaram">Turkapalliyadaram</option>
        <option value="Tagarikanaka">Tagarikanaka</option>
        <option value="Ankireddypalli">Ankireddypalli</option>
        <option value="Ankushapur">Ankushapur</option>
        <option value="Annojiguda">Annojiguda</option>
        <option value="Cherial">Cherial</option>
        <option value="Vikarabad">Vikarabad</option>
        <option value="Gowdavalli">Gowdavalli</option>
        <option value="Hanumanpet">Hanumanpet</option>
        <option value="Hassan Nagar">Hassan Nagar</option>
        <option value="Himayat Nagar">Himayat Nagar</option>
        <option value="GSI (SR) Bandlaguda">GSI (SR) Bandlaguda</option>
        <option value="Abids">Abids</option>
        <option value="Amberpet">Amberpet</option>
        <option value="Dilsukhnagar">Dilsukhnagar</option>
        <option value="Sanjeeva Reddy Nagar">Sanjeeva Reddy Nagar</option>
        <option value="HUDA Residential Complex">HUDA Residential Complex</option>
        <option value="Hindustan Cables Ltd">Hindustan Cables Ltd</option>
        <option value="DK Road">DK Road</option>
        <option value="High Court SO">High Court SO</option>
        <option value="LIC Division">LIC Division</option>
        <option value="Langer House">Langer House</option>
        <option value="Malakpet Colony">Malakpet Colony</option>
        <option value="Mamidipalli">Mamidipalli</option>
        <option value="Mangalhat">Mangalhat</option>
        <option value="Mansoorabad">Mansoorabad</option>
        <option value="Moghalpura">Moghalpura</option>
        <option value="Rampally">Rampally</option>
        <option value="Nanakramguda">Nanakramguda</option>
        <option value="Osman Nagar">Osman Nagar</option>
        <option value="Padmarao Nagar">Padmarao Nagar</option>
        <option value="Padmavathi Nagar">Padmavathi Nagar</option>
        <option value="Pahadi Shareef">Pahadi Shareef</option>
        <option value="Koti">Koti</option>
        <option value="Pirzadi Guda">Pirzadi Guda</option>
        <option value="Nuthankal">Nuthankal</option>
        <option value="P AND T Colony S O">P AND T Colony S O</option>
        <option value="Old MLA Quarters">Old MLA Quarters</option>
        <option value="New MLA Quarters">New MLA Quarters</option>
        <option value="NGRI">NGRI</option>
        <option value="Rein Bazar">Rein Bazar</option>
        <option value="Saidabad Colony">Saidabad Colony</option>
        <option value="Sanath Nagar Colony">Sanath Nagar Colony</option>
        <option value="Seetharampet">Seetharampet</option>
        <option value="Santosh Nagar Colony">Santosh Nagar Colony</option>
        <option value="Sakkubai Nagar">Sakkubai Nagar</option>
        <option value="Napier Lines">Napier Lines</option>
        <option value="Osmania General Hospital">Osmania General Hospital</option>
        <option value="Hyderabad Airport Limited">Hyderabad Airport Limited</option>
        <option value="Ramakrishna Math">Ramakrishna Math</option>
        <option value="Parishram Bhavan">Parishram Bhavan</option>
        <option value="Peddalaxmapur">Peddalaxmapur</option>
        <option value="Ram Koti">Ram Koti</option>
        <option value="Rampallidiara">Rampallidiara</option>
        <option value="Rangareddy District Court">Rangareddy District Court</option>
        <option value="Ravalkole">Ravalkole</option>
        <option value="Sahifa S O">Sahifa S O</option>
        <option value="Sanath Nagar IE">Sanath Nagar IE</option>
        <option value="Hindi Bhawan">Hindi Bhawan</option>
    </select>
</div>
    )
}

export default Select;