import React, { useState } from 'react';

const categories = {
    'Hardware': [
        { text: "L'ordinateur", link: "/hardware/ordinateur", level: 1 },
        { text: "Les Composants", link: "/hardware/Composants", level: 1 },
        { text: "L'Architecture et les Bus", link: "/hardware/Architecture", level: 2 },
        { text: "Système de fichiers et BIOS", link: "/hardware/BIOS", level: 2 },
        { text: "Stockage et RAID", link: "/hardware/Stockage", level: 3 },
      ],
      'Réseaux': [
        { text: "Comment gère-t-on un réseau ?", link: "/reseaux/gerer", level: 1 },
        { text: "De quels équipements se compose-t-il ?", link: "/reseaux/equipements", level: 1 },
        { text: "Comment ces équipements sont-ils connectés entre eux ?", link: "/reseaux/connexion", level: 3 },
        { text: "Les différentes topologies", link: "/reseaux/topologies", level: 2 },
        { text: "À quelle échelle sont-ils déployés ?", link: "/reseaux/deploy", level: 2 },
        { text: "Les modèles OSI et TCP/IP", link: "/reseaux/osi", level: 3 },
        { text: "Étude du réseau avec OSI et TCP/IP", link: "/reseaux/etudetcp", level: 4 },
        { text: "Les couches OSI", link: "/reseaux/couches", level: 3 },
        { text: "Le protocole Ethernet", link: "/reseaux/ethernet", level: 2 },
        { text: "La table CAM", link: "/reseaux/CAM", level: 2 },
        { text: "Half et Full Duplex", link: "/reseaux/duplex", level: 2 },
        { text: "Les VLAN", link: "/reseaux/vlan", level: 1 },
        { text: "ARP", link: "/reseaux/ARP", level: 2 },
        { text: "IPv4 et IPv6", link: "/reseaux/ip", level: 3 },
        { text: "Le protocole ICMP", link: "/reseaux/icmp", level: 1 },
        { text: "NAT", link: "/reseaux/NAT", level: 2 },
        { text: "Routage", link: "/reseaux/routage", level: 2 },
        { text: "Les ACL", link: "/reseaux/ACL", level: 2 },
        { text: "TCP", link: "/reseaux/TCP", level: 2 },
        { text: "UDP", link: "/reseaux/UDP", level: 2 },
        { text: "QUIC", link: "/reseaux/QUIC", level: 2 },
      ],
      'Windows': [
        { text: "Les bases des OS", link: "/windows/bases", level: 1 },
        { text: "Les hyperviseurs (VM)", link: "/windows/hypervisors", level: 1 },
        { text: "Les raccourcis clavier", link: "/windows/raccourcis", level: 1 },
        { text: "Glossaire", link: "/windows/glossaire", level: 2 },
        { text: "Les commandes Windows", link: "/windows/commandes", level: 3 },
        { text: "Les mises à jour", link: "/windows/upd", level: 2 },
        { text: "Installer une appli", link: "/windows/install", level: 1 },
        { text: "La base de registre", link: "/windows/regedit", level: 2 },
        { text: "Les points de restauration", link: "/windows/respoint", level: 1 },
        { text: "Les permissions NTFS", link: "/windows/ntfsperm", level: 3 },
        { text: "Les Droits", link: "/windows/droits", level: 2 },
      ],
      'Maths': [
        { text: "Algorithmes", link: "/maths/algo", level: 3 },
        { text: "Les fonctions usuelles", link: "/maths/usuelles", level: 3 },
        { text: "Les fonctions carrées", link: "/maths/fonctions2", level: 1 },
        { text: "Les fonctions racine carrée", link: "/maths/fonctionV2", level: 1 },
        { text: "Les fonctions cubes", link: "/maths/fonction3", level: 1 },
        { text: "Les fonctions inverses", link: "/maths/fonctioninv", level: 1 },
        { text: "Les Dérivations", link: "/maths/derivation", level: 2},
        { text: "Fonction exponentielle", link: "/maths/exp", level: 3 },
        { text: "Le Logarithme Népérien", link: "/maths/ln", level: 3 },
      ],
      'Git': [
        { text: "Les bases", link: "/git/bases", level: 1 },
      ],
      'Connaissance de l\'entreprise': [
        { text: "Définition de l'entreprise", link: "/entreprise/definition", level: 1 },
      ],
  };
  

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const allEntries = Object.values(categories).flat();
    const filteredResults = allEntries.filter(entry => 
      entry.text.toLowerCase().includes(term)
    );

    setResults(filteredResults);
  };

  const difficulty = (level) => {
    let t = "";
    let color = "";
    if (level == "1") {
      t = "Novice";
      color = "difficulty-novice";
    } else if (level == "2") {
      t = "Amateur";
      color = "difficulty-amateur";
    } else if (level == "3") {
      t = "Intermédiaire";
      color = "difficulty-intermediate";
    } else if (level == "4") {
      t = "Avancé";
      color = "difficulty-advance";
    } else if (level == "5") {
      t = "Expert";
      color = "difficulty-expert";
    }
    return (
        <span className={`difficulty ${color}`}>{t}</span>
    );
}

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Rechercher..." 
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded-md searchbar"
        />
      </div>
      {searchTerm && results.length > 0 && (
        <div className="mt-2 border rounded-md searchbar flex flex-col">
          {results.map((result, index) => (
            <>
            <div className="flex w-full justify-between group items-center relative entry">
                <a href={result.link}>{result.text}</a>
                {difficulty(result.level)}
            </div>
            <div className='seperator'></div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;