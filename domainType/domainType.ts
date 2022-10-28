export function domainType(domains: string[]): string[] {

    let domainType: string[] = [];

    for(let i = 0; i < domains.length; i++) {
                 console.log(domains[i]);
        let lastPeriod = domains[i].lastIndexOf('.')
                console.log(lastPeriod);
        let domain = domains[i].slice(lastPeriod+1);
                console.log(domain);

        if(domain === 'org') {domainType.push('organization');}
        if(domain === 'com') {domainType.push('commercial');}
        if(domain === 'net') {domainType.push('network');}
        if(domain === 'info') {domainType.push('information');}
    }
        console.log(domainType);
    return domainType;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));