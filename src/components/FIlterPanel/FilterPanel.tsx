import classNames from 'classnames';
import React from 'react';
import { Category } from '../../types/Category';
import { User } from '../../types/User';

interface Props {
  setUserToFilter: React.Dispatch<React.SetStateAction<string>>;
  users: User[];
  userToFilter: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  clearInput: () => void;
  resetFilters: () => void;
  categories: Category[];
}

export const FilterPanel: React.FC<Props> = ({
  setUserToFilter,
  users,
  userToFilter,
  handleInput,
  query,
  clearInput,
  resetFilters,
  categories,
}) => {
  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            className={classNames({
              'is-active': userToFilter === '',
            })}
            onClick={(e) => {
              e.preventDefault();
              setUserToFilter('');
            }}
          >
            All
          </a>

          {users.map((user: User) => (
            <a
              data-cy="FilterUser"
              href="#/"
              className={classNames({
                'is-active': userToFilter === user.name,
              })}
              key={user.id}
              onClick={(e) => {
                e.preventDefault();
                setUserToFilter(user.name);
              }}
            >
              {user.name}
            </a>
          ))}
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={query}
              onChange={handleInput}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            {query && (
              <span className="icon is-right">
                <button
                  data-cy="ClearButton"
                  aria-label="Clear input"
                  type="button"
                  className="delete"
                  onClick={clearInput}
                />
              </span>
            )}
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">

          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
          >
            All
          </a>

          {categories.map(category => (
            <a
              data-cy="Category"
              className="button mr-2 my-1"
              href="#/"
              key={category.id}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={resetFilters}

          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
