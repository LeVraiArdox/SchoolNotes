import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const categories = {
    'Hardware': [
      { text: "L'ordinateur", link: "/hardware/ordinateur" },
      { text: "Les Composants", link: "/hardware/Composants" },
      { text: "L'Architecture et les Bus", link: "/hardware/Architecture" },
      { text: "Système de fichiers et BIOS", link: "/hardware/BIOS" },
      { text: "Stockage et RAID", link: "/hardware/Stockage" },
    ],
    'Réseaux': [
      { text: "Comment gère-t-on un réseau ?", link: "/reseaux/gerer" },
      { text: "De quels équipements se compose-t-il ?", link: "/reseaux/equipements" },
      { text: "Comment ces équipements sont-ils connectés entre eux ?", link: "/reseaux/connexion" },
      { text: "Les différentes topologies", link: "/reseaux/topologies" },
      { text: "À quelle échelle sont-ils déployés ?", link: "/reseaux/deploy" },
      { text: "Les modèles OSI et TCP/IP", link: "/reseaux/osi" },
      { text: "Étude du réseau avec OSI et TCP/IP", link: "/reseaux/etudetcp" },
      { text: "Les couches OSI", link: "/reseaux/couches" },
      { text: "Le protocole Ethernet", link: "/reseaux/ethernet" },
      { text: "La table CAM", link: "/reseaux/CAM" },
      { text: "Half et Full Duplex", link: "/reseaux/duplex" },
      { text: "Les VLAN", link: "/reseaux/vlan" },
      { text: "ARP", link: "/reseaux/ARP" },
      { text: "IPv4 et IPv6", link: "/reseaux/ip" },
      { text: "Le protocole ICMP", link: "/reseaux/icmp" },
      { text: "NAT", link: "/reseaux/NAT" },
      { text: "Routage", link: "/reseaux/routage" },
      { text: "Les ACL", link: "/reseaux/ACL" },
      { text: "TCP", link: "/reseaux/TCP" },
      { text: "UDP", link: "/reseaux/UDP" },
      { text: "QUIC", link: "/reseaux/QUIC" },
    ],
    'Windows': [
      { text: "Les bases des OS", link: "/windows/bases" },
      { text: "Les hyperviseurs (VM)", link: "/windows/hypervisors" },
      { text: "Les raccourcis clavier", link: "/windows/raccourcis" },
      { text: "Glossaire", link: "/windows/glossaire" },
      { text: "Les commandes Windows", link: "/windows/commandes" },
      { text: "Les mises à jour", link: "/windows/upd" },
      { text: "Installer une appli", link: "/windows/install" },
      { text: "La base de registre", link: "/windows/regedit" },
      { text: "Les points de restauration", link: "/windows/respoint" },
      { text: "Les permissions NTFS", link: "/windows/ntfsperm" },
      { text: "Les Droits", link: "/windows/droits" },
    ],
    'Maths': [
      { text: "LaTeX (cours que pour moi)", link: "/maths/latex" },
      { text: "Algorithmes", link: "/maths/algo" },
      { text: "Les fonctions usuelles", link: "/maths/usuelles" },
      { text: "Les fonctions carrées", link: "/maths/fonctions2" },
      { text: "Les fonctions racine carrée", link: "/maths/fonctionV2" },
      { text: "Les fonctions cubes", link: "/maths/fonction3" },
      { text: "Les fonctions inverses", link: "/maths/fonctioninv" },
    ],
    'Git': [
      { text: "Les bases", link: "/git/bases" },
    ],
    'Connaissance de l\'entreprise': [
      { text: "Définition de l'entreprise", link: "/entreprise/definition" },
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
        <div className="mt-2 border rounded-md searchbar flex flex-col items-start ">
          {results.map((result, index) => (
            <>
            <Link 
              key={index} 
              href={result.link}
            >
              {result.text}
            </Link>
            <hr className="w-full border-neutral-200 dark:border-contrast" />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;