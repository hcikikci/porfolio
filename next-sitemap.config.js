/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://halitcancikikci.com',
    generateRobotsTxt: true, // (optional)
    outDir: './out',
}