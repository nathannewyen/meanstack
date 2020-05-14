const mons = require('../controllers/mons')

module.exports = (app) => {
    app.get('/', (req, res) => {
        mons.index(req, res)
    });

    app.post('/mongooses', (req, res) => {
        mons.add_mon_process(req, res)
    });

    app.get('/mongooses/new', (req, res) => {
        mons.add_mon(req, res)
    });

    app.get("/mongooses/:id", (req, res) => {
        mons.mon_info(req, res)
    });

    app.get("/mongooses/edit/:id", (req, res) => {
        mons.mon_edit(req, res)
    });

    app.post("/mongooses/:id", (req, res) => {
        mons.mon_edit_process(req, res)
    });

    app.post("/mongooses/destroy/:id", (req, res) => {
        mons.mon_remove(req, res)
    });

}