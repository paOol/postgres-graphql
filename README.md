# postgres-testing
migrations with version control

# goals
*be able to import a sample database with plenty of testing data

*experiment with `GraphQL`

*be able to sync local dbs with eachother, as well as sync with remote db through migrations

*move credentials outside of repo into ENV variables. (more secure)

-initial intro run might go something like this

simple table created

paul adds a field, saves 1st migration, then commits.

rj runs migration (to have the new field).

rj creates new field, saves 2nd migration, then commits.

paul pulls latest changes, runs migrations.

DBs are in sync with hopefully no conflicts.



second run we can maybe mess with entries and more complex usage.

third run, experiment with `git` strategies. Forking/pull requests.
